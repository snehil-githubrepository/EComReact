import React from "react";
import ordersData from "../data/orders.json";

function Orders() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 font-serif mb-8">
        Your Orders
      </h1>

      <div className="space-y-8">
        {ordersData.orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 flex justify-between items-center">
              <div className="text-white flex flex-row space-x-6 font-sans items-center">
                <p className="text-lg">
                  <span className="font-semibold">Ship To: </span> Mr Shyam
                </p>
                <p className="text-md">
                  <span className="font-semibold">Order Placed: </span>
                  {order.date}
                </p>
                <p className="text-md">
                  <span className="font-semibold">Total: </span> {order.total}
                </p>
              </div>
              <div className="text-lg text-white text-right space-y-1 font-serif">
                <p>
                  <span className="font-semibold">Order Number: # </span>
                  {order.orderNumber}
                </p>
              </div>
            </div>

            {/* Main Section */}
            <div className="p-6 flex flex-row sm:flex-row items-start sm:items-center">
              {/* Product Image */}
              <img
                src={order.item.imageUrl}
                alt={order.item.name}
                className="w-24 h-24 object-cover rounded-md border border-gray-300 mr-6"
              />

              {/* Product Details */}
              <div className="text-sm text-gray-800 flex-grow space-y-1">
                <p className="font-semibold text-lg">{order.item.name}</p>
                <p className="text-gray-600">Quantity: {order.item.quantity}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-start sm:items-end space-y-2">
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition">
                  Track Package
                </button>
                <button className="px-5 py-2 text-blue-700 font-semibold rounded-3xl hover:bg-gray-300 transition">
                  View Invoice
                </button>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full mt-2 ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
