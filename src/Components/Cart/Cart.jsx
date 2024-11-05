import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatting";
import { incrementQuantity, decrementQuantity } from "../../redux/slices/cartSlice";

const CartCheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.07;
  const totalAmount = subtotal + shipping + tax;

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
            <div key={item.id} className="flex items-center gap-4 py-4 border-b">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: {formatPrice(item.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </div>
              <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
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
          <p>Subtotal:</p>
          <p>{formatPrice(subtotal)}</p>
        </div>
        
        <div className="flex justify-between py-2">
          <p>Shipping:</p>
          <p>{shipping === 0 ? "Free" : formatPrice(shipping)}</p>
        </div>
        
        <div className="flex justify-between py-2">
          <p>Tax:</p>
          <p>{formatPrice(tax)}</p>
        </div>
        
        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <p>Total:</p>
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
