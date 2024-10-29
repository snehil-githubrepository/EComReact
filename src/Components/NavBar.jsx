import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full p-4 bg-sky-900 text-white font-bold cursor-pointer">
      <div onClick={() => navigate("/")} className="cursor-pointer text-2xl">
        EComReact
      </div>
      <div className="flex gap-4">
        <Button label="Login" onClick={() => navigate("/login")} />
        <Button label="Register" onClick={() => navigate("/signup")} />
      </div>
    </div>
  );
}

export default NavBar;
