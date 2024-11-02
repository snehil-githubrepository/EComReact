import React from "react";
import Button from "./Common/Button";
import SearchBox from "./Common/SearchBox";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();
  const cartItemsCount = 2;

  return (
    <div className="flex justify-between items-center w-full p-4 bg-sky-900 text-white font-bold cursor-pointer">
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer text-3xl font-bold text-white hover:text-sky-100"
      >
        EComReact
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <SearchBox />
      </div>
      <div className="flex gap-4">
        <NavLink to={"/cart"} className="relative">
          <FaShoppingCart className="text-4xl flex items-center justify-center mr-2 mt-1 hover:text-gray-400" />
          {/* (absolute) This positions the <span> absolutely relative to the nearest positioned parent element (in this case, the cart icon <NavLink>). */}
          {/* -top-2 moves the badge up 0.5rem (or 8px in Tailwind’s default spacing) */}
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </NavLink>
        <Button
          label="Login"
          onClick={() => navigate("/login")}
          className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg"
        />
        <Button
          label="Register"
          onClick={() => navigate("/signup")}
          className="bg-white text-sky-800 hover:bg-sky-100 px-4 py-2 rounded-lg font-bold"
        />
      </div>
    </div>
  );
}

export default NavBar;
