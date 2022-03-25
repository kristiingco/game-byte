import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cart-item/CartItem";
import {
    CartDropDownContainer,
    EmptyMessage,
    CartItems,
} from "./CartDropdownStyles.jsx";

import CustomButton, {
    BUTTON_TYPE_CLASSES,
} from "../custom-button/CustomButton";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <CustomButton
                buttonType={BUTTON_TYPE_CLASSES.base}
                onClick={goToCheckoutHandler}
            >
                GO TO CHECKOUT
            </CustomButton>
        </CartDropDownContainer>
    );
};

export default CartDropdown;
