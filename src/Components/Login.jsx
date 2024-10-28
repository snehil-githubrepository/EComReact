import React from "react";
import Card from "./Card";

function Login() {
  return (
    <div className="flex flex-col bg-gray-800 justify-center space-y-3 items-center h-screen">
      <h1 className="text-2xl text-white font-semibold font-serif">
        Login Component
      </h1>
      <Card />
    </div>
  );
}

export default Login;
