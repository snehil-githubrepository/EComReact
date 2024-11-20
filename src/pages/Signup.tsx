import React from "react";
import Card from "../Components/Common/Card";

function Signup() {
  return (
    <div className="flex flex-col bg-gray-200 justify-center space-y-3 items-center h-screen">
      <h1 className="text-2xl text-black font-semibold font-serif">
        Create An Account
      </h1>
      <Card />
    </div>
  );
}

export default Signup;
