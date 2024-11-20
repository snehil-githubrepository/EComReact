import React, { useEffect, useState } from "react";

function TrendingNowBanner() {
  const images = [
    "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?cs=srgb&dl=pexels-laryssa-suaid-798122-1667088.jpg&fm=jpg",
    "https://www.apple.com/newsroom/images/live-action/april-2021/apple_product-availability-spring21_iphone12-purple_geo_04292021_big_carousel.jpg.large.jpg",
    "https://sony.scene7.com/is/image/sonyglobalsolutions/1000X_series_OOFM_banner_mobile_1454x884?$mediumstaticimagehotspot$",
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
