import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import { CategoryContainer } from "./CategoryPageStyles.jsx";

const CategoryPage = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryContainer>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </CategoryContainer>
    );
};

export default CategoryPage;
