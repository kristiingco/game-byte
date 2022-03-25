import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";
import ShopPage from "./routes/shop/ShopPage";
import Navigation from "./routes/navigation/Navigation";

import Authentication from "./routes/authentication/Authentication";
import CheckoutPage from "./routes/checkout/CheckoutPage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="shop/*" element={<ShopPage />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
