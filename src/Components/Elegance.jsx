import React, { useState, useEffect } from "react";
import elegance from "./Elegance.module.css";
import headDe from "./images/Heading Design.png"
import img1 from "./images/Gallery 1.jpg";
import img2 from "./images/Gallery 2.jpg";
import img3 from "./images/Gallery 3.jpg";
import img4 from "./images/Gallery 4.jpg";

const Elegance = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3s
    return () => clearInterval(interval);
  }, [images.length]);


  const getVisibleImages = () => {
    return [
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length],
    ];
  };

  const visibleImages = getVisibleImages();


  return (
<>
    <div className={elegance.section}>
          <h2 className={elegance.subheading}>Experience Elegance on Every Plate</h2>
          <h2 className={elegance.heading}>Elite Class Ambiance</h2>
          <img src={headDe}alt=""className={elegance.headDe}/>
    </div>

    <div className={elegance.container}>
      {/* Left big image */}
      <div className={elegance.bigImage}>
        <img src={images[currentIndex]} alt="Eligance" />
      </div>

      {/* Right section */}
      <div className={elegance.rightSection}>
        {/* Thumbnails row */}
        <div className={elegance.thumbnails}>
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              className={`${elegance.thumb} ${
                index === 1 ? elegance.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Text content */}
        <div className={elegance.textContent}>
          <h3 className={elegance.subtitle}>Experience Elegance on Every Plate</h3>
          
          <p className={elegance.description}>
            Step into a world of elite ambiance, beautifully plated dishes, and timeless traditions. Our gallery captures the soul of Rameshwaram’s rich culinary journey.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Elegance
