import React from "react";
import Card from "../Components/Common/Card"

function Login() {
  return (
    <div className="flex flex-col justify-center space-y-3 items-center h-screen">
      <h1 className="text-2xl text-black font-semibold font-serif">
        Login Component
      </h1>
      <Card />
    </div>
  );
}

export default Login;
