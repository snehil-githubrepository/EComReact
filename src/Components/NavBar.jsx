import React from "react";
import Button from "./Common/Button";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full p-4 bg-sky-900 text-white font-bold cursor-pointer">
      <div onClick={() => navigate("/")} className="cursor-pointer text-2xl">
        EComReact
      </div>
      <div className="flex gap-4">
        <FaShoppingCart className="text-4xl flex items-center justify-center mr-2 mt-1" />
        <Button label="Login" onClick={() => navigate("/login")} />
        <Button label="Register" onClick={() => navigate("/signup")} />
      </div>
    </div>
  );
}

export default NavBar;
