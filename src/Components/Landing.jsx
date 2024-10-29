import React from "react";

function Landing() {
  return (
    <div className="flex justify-center h-screen bg-gray-100 text-gray-800 font-sans p-6">
      <div className="max-w-2xl h-56 shadow-lg p-6 rounded-lg bg-gray-200">
        <h1 className="text-5xl font-extrabold text-sky-900 mb-6">
          Discover Your Next Favorite Product
        </h1>
        <p className="text-slate-600 text-lg">
          Discover the all-new products in this wide range of options available
          just for you!
        </p>
      </div>
    </div>
  );
}

export default Landing;
