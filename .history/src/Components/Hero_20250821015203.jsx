// import React from 'react'
// import { useState, useEffect } from 'react'
// import slider1 from './images/3.jpg'
// import slider2 from './images/2.jpg'
// import slider3 from './images/1.jpg'
// import hero from './Hero.module.css'
// // import middleImage from './images/middle.jpeg'


// const Hero = () => {
// /*const images = [slider1, slider2, slider3];*/
  
// const images = [
//     {
//       background: slider1,
//       content: (
//         <>
//           <p>Bringing the rich taste of North & South India together on a single,flavorful plate.</p>
//           <h1>Welcome To Rameshwaram Veg</h1>
//           <p>From rich North Indian gravies to soulful South Indian delicacies,experience the best of both worlds on one plate.</p>
//         </>
//       )
//     },
//     {
//       background: slider2,
//       content: (
//         <>
//           <h1>Savor the Diversity of Indian Cuisine</h1>
//           {/* <img src={middleImage} alt="Delicious food" className={hero['inline-image']} /> */}
//           <p>Indulge in authentic South Indian classics,hearty North Indian meals, and vibrant Maharashtrian favorites -- served with warmth and tradition.</p>
//         </>
//       )
//     },
//     {
//       background: slider3,
//       content: (
//         <>
//           <h1>Taste India on One Plate</h1>
//           <p>From crispy dosas and fluffy idlis to spicy misal and creamy paneer delights-- explore the rich flavors of South, Maharashtra, and North India, all under one roof.</p>
//         </>
//       )
//     }
//   ];



// const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex(prevIndex =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // change every 3s
   
//      return () => clearInterval(timer); // cleanup
//   }, [images.length]);

//   return (
    
//     <div className={hero['hero-section']}>
//       {/* Flex container */}
      
//       <div
//         className={hero['slider-container']}
//         style={{ transform: `translateX(-${currentIndex * 100}%)`,
//                  width: `${images.length * 100}%`}}
//       >
//          {images.map((slide, i) => (

//           <div key={i} className={hero['slide']}>


//       <img
//             key={i}
//             src={slide.background}
//             alt={`Slide ${i + 1}`}
//             className={hero['slider-image']}
//       />

       
//             <div className={hero['slide-text']}>
//               {slide.content}
//             </div>
//           </div>


//          ))}
//     </div>
//     </div>
//   )
// }

// export default Hero



import React, { useState, useEffect } from 'react';
import hero from './Hero.moduleero.module.css';
import slider1 from './Images/3.jpg';
import slider2 from './Images/2.jpg';
import slider3 from './Images/1.jpg';
import middleImage from './images/middle.jpeg'; // Your middle image

const Hero = () => {
  const slides = [
    {
      bgImage: slider1,
      topText: "Bringing the rich taste of North & South India together on a single, flavorful plate.",
      middleImage: middleImage, // Image between texts
      bottomText: "Welcome To Rameshwaram Veg",
      cta: "From rich North Indian gravies to soulful South Indian delicacies, experience the best of both worlds on one plate."
    },
    {
      bgImage: slider2,
      // topText: "Traditional South Indian Taste",
      middleImage: middleImage,
      bottomText: "Savor the Diversity of Indian Cusisine",
      cta: "Indulge in authentic South Indian classics. hearty north indians meals, and vibrant maharashtrian favorites-served with warmth and tradition"
    },
    {
      bgImage: slider3,
      // topText: "Fusion Specialties",
      middleImage: middleImage,
      bottomText: "Where North meets South in perfect harmony",
      cta: "From Crispy dosas and fluffy idlis to spicy misal and creamy panner delights-eexplore the rich flavours of South-Maharashtra, and North India, all under one roof."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={hero['hero-container']}>
      <div 
        className={hero['hero-slider']}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
        }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={hero['hero-slide']}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className={hero['slide-content']}>
            <div className={hero['text-cont']}>
              <div className={hero['text-top']}>{slide.topText}</div>
              
            
              
              <div className={hero['text-bottom']}>{slide.bottomText}</div>
                <div className={hero['middle-image-container']}>
                <img 
                  src={slide.middleImage} 
                  alt="Decoration" 
                  className={hero['middle-image']}
                />
              </div>
              
              <p className={hero['cta-button']}>
                {slide.cta}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    
    </div>
  );
};

export default Hero;

