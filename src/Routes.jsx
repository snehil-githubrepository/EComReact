import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;
