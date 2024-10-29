import React from "react";
import Button from "./Button";

function Card() {
  return (
    <div className="container mx-auto w-80 h-40 p-6 bg-white shadow-lg space-y-12 rounded-xl">
      <div className="space-y-6">
        <input
          placeholder="please enter your email"
          className="w-full rounded-md border border-gray-300  p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          placeholder="please enter your password"
          className="w-full rounded-md border border-gray-300 p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <Button label="Submit" />
    </div>
  );
}

export default Card;
