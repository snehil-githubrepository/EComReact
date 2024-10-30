import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Jeans",
    price: "₹ 2999",
    image:
      "https://media.istockphoto.com/id/173239968/photo/skinny-tight-blue-jeans-on-white-background.jpg?s=612x612&w=0&k=20&c=HsI-xC12KkzjeCaFC4eQ33SZuL53EerbfLMkPuLpaVw=",
    rating: 4.5,
    description: "High-quality product that meets your needs.",
  },
  {
    id: 2,
    name: "DSLR",
    price: "₹ 49,999",
    image:
      "https://images.unsplash.com/photo-1585459733256-a22e2b5eecf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8NGslMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    rating: 3.8,
    description: "An essential item for your collection.",
  },
  {
    id: 3,
    name: "Shirt",
    price: "₹ 1999",
    image:
      "https://img.freepik.com/premium-photo/man-white-shirt-watch-his-left-hand_854727-173462.jpg?semt=ais_hybrid",
    rating: 4.0,
    description: "Affordable and reliable product.",
  },
  {
    id: 4,
    name: "WristWatch - Titan",
    price: "₹ 30,000",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    description: "Great value for money.",
  },
  {
    id: 5,
    name: "Shoes",
    price: "₹ 5999",
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5.0,
    description: "Top-rated product by our customers.",
  },
  {
    id: 6,
    name: "Kurta",
    price: "₹ 3999",
    image:
      "https://images.pexels.com/photos/8217728/pexels-photo-8217728.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    description: "A must-have item!",
  },
  {
    id: 7,
    name: "T-Shirt",
    price: "₹ 1299",
    image:
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    rating: 4.1,
    description: "TShirt Up!",
  },
  {
    id: 8,
    name: "IPhone 16 Pro",
    price: "₹ 1,20,999",
    image:
      "https://static.toiimg.com/thumb/msid-113136774,width-400,resizemode-4/113136774.jpg",
    rating: 4.1,
    description: "A must-have item!",
  },
];

function FeaturedProducts() {
  return (
    <div className="flex flex-col items-center justify-start p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
