import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        {/* Display old price and new price if there's a discount */}
        <div className="text-lg text-gray-700 mb-2">
          {product.oldPrice && (
            <span className="line-through text-gray-500 mr-2">
              {product.oldPrice}
            </span>
          )}
          <span className="text-green-500 font-semibold">
            {product.price}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{product.description}</p>

        {/* Display stock message based on the stock count */}
        {product.stock === 0 ? (
          <p className="text-red-500 font-bold">Out of Stock</p>
        ) : product.stock <= 10 ? (
          <p className="text-orange-500 font-bold">Only a Few Left!</p>
        ) : (
          <p className="text-green-600 font-bold">In Stock</p>
        )}

        <div className="flex items-center mb-2">
          {/* Displaying rating */}
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < Math.floor(product.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.429 8.163 1.181-5.904 5.783 1.39 8.137L12 18.896l-7.317 3.849 1.39-8.137-5.904-5.783 8.163-1.181L12 .587z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            ({product.rating})
          </span>
        </div>

        <div className="flex flex-col gap-4">
        <button
            className={`py-2 px-4 rounded-md transition duration-300 ${
              product.stock === 0
                ? "bg-gray-200 text-black cursor-not-allowed"
                : "bg-sky-900 text-white hover:bg-sky-800"
            }`}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Unavailable" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
