import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from "./CheckoutPageStyles.jsx";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            <div>
                {cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    );
                })}
            </div>

            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default CheckoutPage;
