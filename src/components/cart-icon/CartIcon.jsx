import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
    ShoppingIcon,
    CartIconContainer,
    ItemCount,
} from "./CartIconStyles.jsx";

const CartIcon = () => {
    const { toggle, setToggle, cartCount } = useContext(CartContext);

    const toggleCart = () => setToggle(!toggle);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
