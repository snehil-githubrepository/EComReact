import React from "react";
import { formatPrice } from "../utils/formatting"
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  //logic for amount
  const delivery = subtotal > 1000 || subtotal <= 0 ? 0 : subtotal * 0.01;
  const tax = subtotal * 0.07; // 7 percent tax
  const totalAmount = subtotal + delivery + tax;

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Order Summary Section */}
      <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart Items</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Price: {formatPrice(item.price)}
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="text-lg" onClick={() => handleDecrement(item.id)}><RiSubtractFill /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}><FaPlus /></button>
                </div>
              </div>
              <p className="font-semibold">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          ))
        ) : (
          <p>Your cart is empty. Go back to shop and add some items!</p>
        )}
      </div>

      {/* Payment Summary Section */}
      <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between py-2">
          <p className="italic">Subtotal</p>
          <p>{formatPrice(subtotal)}</p>
        </div>

        <div className="flex justify-between py-2">
          <p className="italic">Delivery</p>
          <p>{delivery === 0 ? "Free" : formatPrice(delivery)}</p>
        </div>

        <div className="flex justify-between py-2">
          <p className="italic">Tax</p>
          <p>{formatPrice(tax)}</p>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>{formatPrice(totalAmount)}</p>
        </div>

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-3xl mt-6"
          onClick={() => alert("Proceeding to checkout...")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckoutPage;
