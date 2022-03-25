import React, { useContext } from "react";

import {
    CheckoutItemArrow,
    CheckoutItemContainer,
    CheckoutItemName,
    CheckoutItemPrice,
    CheckoutItemQuantity,
    CheckoutItemValue,
    CheckoutRemoveButton,
    CheckoutImageContainer,
} from "./CheckoutItemStyles.jsx";

import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
    const { removeItemFromCart, addItemToCart, subtractItemFromCart } =
        useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const subtractItemHandler = () => subtractItemFromCart(cartItem);

    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutImageContainer>
            <CheckoutItemName>{name}</CheckoutItemName>

            <CheckoutItemQuantity>
                <CheckoutItemArrow onClick={subtractItemHandler}>
                    &#10094;
                </CheckoutItemArrow>
                <CheckoutItemValue>{quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={addItemHandler}>
                    &#10095;
                </CheckoutItemArrow>
            </CheckoutItemQuantity>
            <CheckoutItemPrice>${price}</CheckoutItemPrice>
            <CheckoutRemoveButton onClick={removeItemHandler}>
                &#10005;
            </CheckoutRemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
