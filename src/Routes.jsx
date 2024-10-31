import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import ProductDetails from "./Components/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRoutes;
