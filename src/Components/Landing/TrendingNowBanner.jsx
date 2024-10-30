import React, { useEffect, useState } from "react";

function TrendingNowBanner() {
  const images = [
    "https://png.pngtree.com/thumb_back/fh260/background/20231110/pngtree-happy-diwali-festival-of-light-background-with-diwali-diya-image_14005021.jpg",
    "https://images.pexels.com/photos/3656267/pexels-photo-3656267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4078516/pexels-photo-4078516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // last logic for going back to first image
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    //relative for relatively keeping this in sync with our ui
    //bg-cover and bg-center => cover entire image on our container and center it 
    <div
      className="relative h-72 shadow-lg text-center w-full bg-cover bg-center p-6 rounded-lg bg-gray-200"
      style={{
        backgroundImage: `url('${images[currentImage]}')`,
      }}
    > 
      <h1 className="text-5xl font-extrabold text-white mb-6">
        Discover Your Next Favorite Product
      </h1>
      <p className="text-gray-100 text-lg">
        Discover the all-new products in this wide range of options available
        just for you!
      </p>
    </div>
  );
}

export default TrendingNowBanner;
