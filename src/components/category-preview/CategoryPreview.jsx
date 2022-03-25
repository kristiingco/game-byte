import React from "react";

import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from "./CategoryPreviewStyles.jsx";

import ProductCard from "../product-card/ProductCard";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
