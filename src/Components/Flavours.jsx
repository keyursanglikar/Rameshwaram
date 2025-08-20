import React from "react";
import flavours from "./Flavours.module.css";

// Example images
import imge1 from "./images/Slider 1.jpg";
import imge2 from "./images/Slider 2.jpg";
import imge3 from "./images/Slider 3.jpg";

const slides = [
  { image: imge1, text: "Vegetarian Delight" },
  { image: imge2, text: "Signature Recipes" },
  { image: imge3, text: "Authentic Flavours" },
];

const Flavours = () => {
  return (
    <div className={flavours.slider}>
      <div className={flavours.sliderTrack}>
        {slides.concat(slides).map((slide, i) => (
          <div className={flavours.slide} key={i}>
            <img src={slide.image} alt={slide.text} />
            <div className={flavours.overlay}>{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavours;
