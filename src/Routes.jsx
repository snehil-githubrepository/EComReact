import React from "react";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import ProductDetails from "./Components/ProductDetails";
import CartCheckoutPage from "./Components/Cart/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartCheckoutPage />} />
    </Routes>
  );
}

export default AppRoutes;
