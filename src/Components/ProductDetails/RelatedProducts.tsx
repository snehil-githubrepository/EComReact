import React from "react";

function RelatedProducts() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Replace with actual related products data */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="path/to/related-product1.jpg"
            alt="Related Product 1"
            className="w-full h-40 object-cover mb-4"
          />
          <p className="font-semibold">Related Product 1</p>
          <span className="text-red-500 font-bold">$49.99</span>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="path/to/related-product2.jpg"
            alt="Related Product 2"
            className="w-full h-40 object-cover mb-4"
          />
          <p className="font-semibold">Related Product 2</p>
          <span className="text-red-500 font-bold">$69.99</span>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="path/to/related-product3.jpg"
            alt="Related Product 3"
            className="w-full h-40 object-cover mb-4"
          />
          <p className="font-semibold">Related Product 3</p>
          <span className="text-red-500 font-bold">$89.99</span>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
