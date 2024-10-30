import React, { useEffect, useState } from "react";

function TrendingNowBanner() {
  const images = [
    "https://as2.ftcdn.net/v2/jpg/09/82/19/37/1000_F_982193797_n3i49v5T6Jb1HaxNcjd3TQmN5LFMNyUn.jpg",
    "https://c4.wallpaperflare.com/wallpaper/308/395/819/religious-diwali-candle-hd-wallpaper-preview.jpg",
    "https://t3.ftcdn.net/jpg/06/39/60/72/240_F_639607204_i7LgxE13yXzbPx1t4ygivMBIOlJFiYV7.jpghttps://t3.ftcdn.net/jpg/06/39/60/72/240_F_639607274_BUs4CKcdGmFLgU9FAch24sPbQ1zVfIdb.jpg",
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
