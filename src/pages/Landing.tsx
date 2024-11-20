import React from "react";
import TrendingNowBanner from "../Components/Landing/TrendingNowBanner";
import FeaturedProducts from "../Components/Landing/FeaturedProducts";

function Landing() {
  return (
    <div className="text-gray-800 font-sans p-6">
      <TrendingNowBanner />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
