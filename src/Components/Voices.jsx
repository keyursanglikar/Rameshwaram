import React, { useState } from "react";
import voices from "./Voices.module.css";


import chefImg from "./images/A_chef_in_uniform_holding_a_tray_of_food_isolated_-removebg-previe.jpeg";
import userImg from "./images/Testimonals 4.jpg";
import userImg2 from "./images/Testimonals 3.jpg";
import userImg3 from "./images/Testimonals 5.jpg";
import userImg4 from "./images/Testimonals 2.jpg";
import headDesign from "./images/Heading Design.png";



    const testimonials = [
  {
    quote:
      "The best of both worlds! I had dosa, my husband had butter chicken — we both were happy!",
    name: "Mina Kumar",
    image: userImg,
    stars: 5,
  },
  {
    quote:
      "Their satwik thali and paneer tikka combo are unbeatable. Great taste, divine vibe!",
    name: "Rahul Yadav",
    image: userImg2,
    stars: 5,
  },
  {
    quote: "The best of both worlds! I had dosa, my husband had butter chicken — we both were happy!",
    name: "Raha Kumbhar",
    image: userImg3,
    stars: 4,
  },
  {
    quote: "Their satwik thali and paneer tikka combo are unbeatable. Great taste, divine vibe!",
    name: "Rajesh Shah",
    image: userImg4,
    stars: 4,
  },
];

const Voices = () => {
    const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };


  return (
    <div className={voices['section-voices']}>
      {/* Top Heading */}
      <h3 className={voices.subtitle}>Customer Voices</h3>
      <h2 className={voices.title}>Taste-Tested Trust</h2>
      <img src={headDesign} alt="decor" className={voices.decor} />
      <p className={voices.description}>
        As you explore these testimonials, we hope you’ll get a true taste of
        the quality, authenticity, and warm hospitality that define the
        Rameshwaram dining experience.
      </p>

      {/* Middle Layout */}
      <div className={voices.container}>
        {/* Left card */}
        <div className={voices.leftCard}>
          <h3>Hear from Our Happy Guests</h3>
          <p>
            At Rameshwaram, tradition meets taste. Hear what our guests say
            about the food, ambiance, and warm service.
          </p>
        </div>

        {/* Center chef image */}
        <div className={voices.centerImage}>
          <img src={chefImg} alt="Chef" />
        </div>

        {/* Right testimonial card */}
        <div className={voices.rightCard}>
          <p className={voices.quote}>
            "{testimonials[index].quote}"
          </p>
          <div className={voices.userInfo}>
            {/* <img src={userImg} alt="Mina Kumar" className={voices.userImg} />
            <div>
              <h4>Mina Kumar</h4>
              <p className={voices.stars}>⭐⭐⭐⭐⭐</p>
            </div> */}
             <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className={voices.userImg}
            />
          </div>

           <h4>{testimonials[index].name}</h4>
              <p className={voices.stars}>
                {"⭐".repeat(testimonials[index].stars)}
              </p>
           

          <div className={voices.arrows}>
            <span className={voices.arrow} onClick={prevTestimonial}>&lt;</span>
            <span className={voices.arrow} onClick={nextTestimonial}>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voices;
