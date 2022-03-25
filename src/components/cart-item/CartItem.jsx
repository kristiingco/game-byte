import React from "react";

import { CartItemContainer, ItemDetails } from "./CartItemStyles.jsx";

const CartItem = ({ item }) => {
    const { imageUrl, price, name, quantity } = item;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <h2>{name}</h2>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
