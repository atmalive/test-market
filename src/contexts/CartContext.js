import { createContext, useContext, useState, useEffect } from 'react';
import {getFromStorage, setInStorage} from "@/utils/storageUtil";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [customerPhone, setCustomerPhone] = useState('');

    useEffect(() => {
        const items = getFromStorage('cartItems');
        if (items) {
            setCartItems(items);
        }
    }, []);

    useEffect(() => {
        const items = getFromStorage('customerPhone');
        if (items) {
            setCustomerPhone(items);
        }
    }, []);

    // useEffect(() => {
    //     console.log(customerPhone)
    // }, [customerPhone])
    //
    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const addToCart = (item) => {
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
        setInStorage('cartItems', newCartItems);
    };

    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(newCartItems);
        setInStorage('cartItems', newCartItems);
    };

    const updateCustomerPhone = (phone) => {
        setCustomerPhone(phone);
        setInStorage('customerPhone', phone);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        customerPhone,
        updateCustomerPhone
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
