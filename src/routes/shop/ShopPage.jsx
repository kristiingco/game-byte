import React from "react";

import { Routes, Route } from "react-router-dom";

import CategoriesPreviewPage from "../categories-preview/CategoriesPreviewPage";
import CategoryPage from "../category/CategoryPage";

const ShopPage = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreviewPage />} />
            <Route path=":category" element={<CategoryPage />} />
        </Routes>
    );
};

export default ShopPage;
