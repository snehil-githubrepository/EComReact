import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RelatedProducts from "../Components/ProductDetails/RelatedProducts";
import QnA from "../Components/ProductDetails/QnA";
import CustomerReviews from "../Components/ProductDetails/CustomerReviews";
import Specifications from "../Components/ProductDetails/Specifications";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import Toast from "../Components/Common/Toast";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return <p>Product details not found.</p>;
  }

  const oldPriceValue = product.oldPrice
    ? parseFloat(product.oldPrice.replace(/[^0-9.-]+/g, ""))
    : null;
  const priceValue = product.price
    ? parseFloat(product.price.replace(/[^0-9.-]+/g, ""))
    : null;
  const discountPercentage =
    oldPriceValue && priceValue
      ? Math.round(((oldPriceValue - priceValue) / oldPriceValue) * 100)
      : null;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace(/[^\d.-]/g, "")),
        image: product.image,
      })
    );

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Product Details Grid Layout */}
      <div className="grid grid-cols-12 gap-8 bg-white rounded-lg shadow-lg p-6">
        {/* Left Column - Image Gallery */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-4">
            {/* Main Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Thumbnails */}
            <div className="flex space-x-2 mt-4">
              {/* Placeholder thumbnails; replace with actual product.images array */}
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="col-span-12 md:col-span-8">
          {/* Product Title and Price */}
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <div className="text-lg text-gray-700 mb-2">
            {product.oldPrice && (
              <span className="line-through text-gray-500 mr-2">
                {product.oldPrice}
              </span>
            )}
            <span className="text-green-500 font-semibold">
              {product.price}
            </span>
            {discountPercentage && (
              <span className="text-red-500 font-semibold ml-4">
                {discountPercentage}% OFF
              </span>
            )}
          </div>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          {/* Key Features */}
          <ul className="list-disc list-inside mb-6 text-gray-600">
            <li>High-quality materials</li>
            <li>Advanced performance</li>
            <li>Durable and long-lasting</li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-3xl hover:bg-yellow-600"
            >
              Add to Cart
            </button>

            <button className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-600">
              Buy Now
            </button>
          </div>

          {/* Specifications */}
          <Specifications product={product} />
        </div>
      </div>

      <CustomerReviews product={product} />
      <QnA />
      <RelatedProducts />

      {/* Show toast if showToast is true */}
      {showToast && (
        <Toast message="Item added" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}

export default ProductDetails;
