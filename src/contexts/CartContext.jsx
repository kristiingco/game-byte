import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const subtractCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return removeCartItem(cartItems, productToRemove);
        }

        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
};

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
    toggle: false,
    setToggle: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    subtractItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems, item));
    };

    const subtractItemFromCart = (item) => {
        setCartItems(subtractCartItem(cartItems, item));
    };

    const removeItemFromCart = (item) => {
        setCartItems(removeCartItem(cartItems, item));
    };

    const value = {
        toggle,
        setToggle,
        cartItems,
        addItemToCart,
        cartCount,
        subtractItemFromCart,
        removeItemFromCart,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
