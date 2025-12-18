"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import styles from "./menu.module.css";
import Image from "next/image";

export default function MenuPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    const [activeCategory, setActiveCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    // Modal
    const [selectedItem, setSelectedItem] = useState(null);
    const [modifiers, setModifiers] = useState({});
    const [isClosing, setIsClosing] = useState(false); // For exit animation

    useEffect(() => {
        async function fetchMenu() {
            try {
                const res = await fetch("/api/menu");
                const data = await res.json();
                setCategories(data.categories);
                if (data.categories.length > 0) setActiveCategory(data.categories[0].category);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMenu();
    }, []);

    // Escape Key Listener
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape" && selectedItem) handleCloseModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [selectedItem]);

    const scrollToCategory = (catId) => {
        setActiveCategory(catId);
        const element = document.getElementById(catId.replace(/\s+/g, '-'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Filter Logic
    const filteredCategories = categories.map(cat => ({
        ...cat,
        items: cat.items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = activeFilter === "All" || item.tags.includes(activeFilter);
            return matchesSearch && matchesFilter;
        })
    })).filter(cat => cat.items.length > 0);

    // Modal Handlers
    const openModal = (item) => {
        setSelectedItem(item);
        setModifiers({});
        setIsClosing(false);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedItem(null);
            setModifiers({});
            setIsClosing(false);
        }, 300); // Match CSS animation duration
    };

    const handleAddToCart = () => {
        addToCart(selectedItem, modifiers);
        handleCloseModal();
    };

    const handleModifierChange = (type, value) => {
        setModifiers(prev => ({ ...prev, [type]: value }));
    };

    if (loading) return <div className={styles.loading}>Preparing Menu...</div>;

    return (
        <div className={styles.page}>
            {/* Top Bar: Search & Filters */}
            <header className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        className={styles.search}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className={styles.filters}>
                        {["All", "Veg", "Non-Veg", "Vegan", "Spicy", "Sweet"].map(f => (
                            <button
                                key={f}
                                className={`${styles.filterChip} ${activeFilter === f ? styles.activeChip : ''}`}
                                onClick={() => setActiveFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className={styles.layout}>
                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.menuHeading}>Categories</h3>
                    <nav className={styles.nav}>
                        {categories.map(cat => (
                            <button
                                key={cat.category}
                                className={`${styles.navItem} ${activeCategory === cat.category ? styles.activeNav : ''}`}
                                onClick={() => scrollToCategory(cat.category)}
                            >
                                {cat.category}
                                <span className={styles.count}>{cat.items.length}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Feed */}
                <main className={styles.feed}>
                    {filteredCategories.map(cat => (
                        <section
                            key={cat.category}
                            id={cat.category.replace(/\s+/g, '-')}
                            className={styles.categorySection}
                        >
                            <h2 className={styles.catTitle}>{cat.category}</h2>
                            <div className={styles.grid}>
                                {cat.items.map(item => (
                                    <div key={item.id} className={styles.card}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.badges}>
                                                {item.isBestseller && <span className={styles.badgeBest}>Bestseller</span>}
                                                {item.isNew && <span className={styles.badgeNew}>Newly Added</span>}
                                                {item.tags.includes("Veg") && <span className={styles.dotVeg}>●</span>}
                                                {item.tags.includes("Non-Veg") && <span className={styles.dotNonVeg}>●</span>}
                                            </div>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <p className={styles.price}>₹{item.price}</p>
                                            <p className={styles.desc}>{item.desc}</p>
                                        </div>
                                        <div className={styles.cardImageWrapper} onClick={() => openModal(item)}>
                                            <img src={item.image} alt={item.name} className={styles.cardImage} />
                                            <button className={styles.addBtn}>ADD</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>

            {/* Cinematic Modal */}
            {selectedItem && (
                <div className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : ''}`} onClick={handleCloseModal}>
                    <div className={`${styles.modal} ${isClosing ? styles.scaleOut : ''}`} onClick={e => e.stopPropagation()}>

                        {/* Header Image */}
                        <div className={styles.modalHeader}>
                            <img src={selectedItem.image} alt={selectedItem.name} className={styles.modalBg} />
                            <button className={styles.closeBtn} onClick={handleCloseModal}>×</button>
                        </div>

                        <div className={styles.modalContent}>
                            <div className={styles.modalTitleRow}>
                                <h2>{selectedItem.name}</h2>
                                <span className={styles.modalPrice}>₹{selectedItem.price}</span>
                            </div>
                            <p className={styles.modalDesc}>{selectedItem.desc}</p>

                            {/* Modifiers */}
                            <div className={styles.modifiersSection}>
                                <h4>Extras</h4>
                                <div className={styles.modifierGroup}>
                                    <label>
                                        <input type="checkbox" onChange={(e) => handleModifierChange("Extra Cheese", e.target.checked ? "Yes" : "No")} />
                                        Extra Cheese (+₹40)
                                    </label>
                                    <label>
                                        <input type="checkbox" onChange={(e) => handleModifierChange("Spicy", e.target.checked ? "Yes" : "No")} />
                                        Make it Spicy
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <Button variant="primary" onClick={handleAddToCart} size="full">
                                Add Item to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
