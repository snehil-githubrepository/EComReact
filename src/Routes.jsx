import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import CartCheckoutPage from "./pages/Cart";
import Orders from "./pages/Orders";
import Landing from "./pages/Landing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartCheckoutPage />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default AppRoutes;
