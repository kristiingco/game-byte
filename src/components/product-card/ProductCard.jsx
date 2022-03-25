import React, { useContext } from "react";

import {
    ProductCardContainer,
    ProductCardFooter,
    ProductCardName,
    ProductCardPrice,
} from "./ProductCardStyles.jsx";

import CustomButton, {
    BUTTON_TYPE_CLASSES,
} from "../custom-button/CustomButton";

import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>${price}</ProductCardPrice>
            </ProductCardFooter>

            <CustomButton
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to cart
            </CustomButton>
        </ProductCardContainer>
    );
};

export default ProductCard;
