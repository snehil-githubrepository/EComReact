import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/products.json";

function FeaturedProducts() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {productsData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
