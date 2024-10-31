import React from "react";

function CustomerReviews({ product }) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold">{product.rating} ★</span>
        <span className="ml-4 text-gray-600">
          {product.reviews?.length} reviews
        </span>
      </div>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.slice(0, 3).map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center">
              <span className="text-lg font-semibold">{review.username}</span>
              <span className="ml-4 text-yellow-500">
                {"⭐".repeat(review.rating)}
              </span>
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      )}
      <button className="text-sky-600 font-semibold mt-4">
        See all reviews
      </button>
    </div>
  );
}

export default CustomerReviews;
