import React from "react";
import culinary from "./Culinary.module.css";
import headDes from "./images/Heading Design.png";
import { FaUtensils, FaWineGlassAlt, FaLeaf, FaUserTie, FaShieldAlt } from "react-icons/fa";
// import culinary1 from './images/Culinary1.png'

const Culinary = () => {
  const cards = [
    {
      icon: <FaUtensils size={40} />,
      // image:culinary1,
      title: "High Quality Food",
      desc: "We serve more than food – we serve quality, tradition, and taste in every bite."
    },
    {
      icon: <FaWineGlassAlt size={40} />,
      title: "Inspiring Recipes",
      desc: "Discover recipes that blend tradition and creativity, crafted to inspire every palate."
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Purely Veg, Perfectly Delightful",
      desc: "From satvik South Indian meals to North Indian gravies, our veg dishes are full of flavour."
    },
    {
      icon: <FaUserTie size={40}/>,
      title: "Veteran Staff",
      desc: "Skilled chefs and staff serving expertise and warmth in every dish."
    },
    {
      icon: <FaLeaf size={40}/>,
      title: "Pristine Ingredients",
      desc: "Our dishes begin with pristine ingredients—pure, fresh, and full of flavour."
    },
     {
      icon: <FaShieldAlt size={40}/>,
      title: "Hygiene & Safety First",
      desc: "Strict kitchen protocols and cleanliness at every step of preparation."
    },
  ];

  return (
    <div className={culinary.section}>
      <h2 className={culinary.subheading}>Where Comfort Meets</h2>
      <h2 className={culinary.heading}>Culinary Elegance</h2>
      <img src={headDes}alt=""className={culinary.headDes}/>
      <div className={culinary.grid}>
        {cards.map((card, index) => (
          <div key={index} className={culinary.card}>
            <div className={culinary.icon}>{card.icon}</div>
            <h3 className={culinary.title}>{card.title}</h3>
            <p className={culinary.desc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culinary;
