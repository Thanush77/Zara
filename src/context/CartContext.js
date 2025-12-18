"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cafe_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cafe_cart', JSON.stringify(cart));
    }, [cart]);

    // Helper to generate unique ID for item + modifiers
    const generateCartItemId = (item, modifiers = {}) => {
        const modString = Object.entries(modifiers)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([key, val]) => `${key}:${val}`)
            .join('|');
        return `${item.id}-${modString}`;
    };

    const addToCart = (item, modifiers = {}) => {
        const cartItemId = generateCartItemId(item, modifiers);

        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.cartItemId === cartItemId);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, modifiers, cartItemId, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (cartItemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
    };

    const updateQuantity = (cartItemId, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.cartItemId === cartItemId) {
                    const newQty = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            }).filter(item => item.quantity > 0)
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const [discount, setDiscount] = useState(0);

    const applyCoupon = (code) => {
        if (code === 'WELCOME50') {
            setDiscount(0.5); // 50%
            return { success: true, message: '50% Discount Applied!' };
        } else if (code === 'NAMMA10') {
            setDiscount(0.1); // 10%
            return { success: true, message: '10% Discount Applied!' };
        }
        setDiscount(0);
        return { success: false, message: 'Invalid Coupon' };
    };

    const finalTotal = cartTotal * (1 - discount);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            discount,
            finalTotal,
            applyCoupon,
            cartCount,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
