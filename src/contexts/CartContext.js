import React, { createContext, useContext, useState, useEffect } from 'react';
import {getFromStorage, setInStorage} from "@/utils/storageUtil";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = getFromStorage('cart');
        if (items) {
            setCartItems(items);
        }
    }, []);

    const addToCart = (item) => {
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
        setInStorage('cart', newCartItems);
    };

    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(newCartItems);
        setInStorage('cart', newCartItems);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
