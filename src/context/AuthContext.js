"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage on mount
        const savedUser = localStorage.getItem('cafe_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Auth Error", e);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockUser = {
                        id: 'u123',
                        name: 'John Doe',
                        email: email,
                        role: email === 'admin@cafe.com' ? 'admin' : 'user',
                        points: 150,
                        addresses: [
                            { id: 1, label: 'Home', text: '123, Koramangala, Bangalore' }
                        ],
                        orders: []
                    };
                    setUser(mockUser);
                    localStorage.setItem('cafe_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 500);
        });
    };

    const register = async (userData) => {
        // Mock Register
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    id: `u${Date.now()}`,
                    name: userData.name,
                    email: userData.email,
                    points: 50, // Sign up bonus
                    addresses: [],
                    orders: []
                };
                setUser(newUser);
                localStorage.setItem('cafe_user', JSON.stringify(newUser));
                resolve(newUser);
            }, 500);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('cafe_user');
    };

    const addOrderToHistory = (order) => {
        setUser(prev => {
            if (!prev) return null;
            const newPoints = Math.floor(order.total * 0.1); // 10% points
            const updatedUser = {
                ...prev,
                points: prev.points + newPoints,
                orders: [order, ...prev.orders]
            };
            localStorage.setItem('cafe_user', JSON.stringify(updatedUser));
            return updatedUser;
        });
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, addOrderToHistory }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
