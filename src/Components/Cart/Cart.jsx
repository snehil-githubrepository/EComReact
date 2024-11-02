import React from "react";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 2999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Product 2",
      price: 3999,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-6">
      {/* Cart Items (Left Column) */}
      <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <h1 className="font-bold font-serif text-3xl text-sky-900 mb-6">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">You don't have anything in your cart.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg"
                />
                <div className="ml-6 flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600 mt-1">
                    Price: Rs.{item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button className="ml-auto text-red-500">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order Summary (Right Column) */}
      <div className="w-full md:w-1/4 bg-gray-200 rounded-lg shadow-md p-8">
        <h2 className="font-bold text-2xl text-gray-700 mb-4">Order Summary</h2>

        <div className="flex justify-between mb-4 text-lg">
          <span>Subtotal</span>
          <span>Rs.{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-lg">
          <span>Estimated Tax</span>
          <span>Rs.122</span>
        </div>
        <div className="flex justify-between mb-6 text-lg">
          <span>Delivery</span>
          <span>Rs.40</span>
        </div>

        <hr className="border-gray-300 mb-4" />

        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>{(subtotal + 2.5 + 5.0).toFixed(2)}</span>
        </div>

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 mt-6 rounded-lg text-lg font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;