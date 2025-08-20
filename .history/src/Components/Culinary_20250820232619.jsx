import React from "react";
import culinary from "./Culinary.module.css";
import headDes from "./images/Heading Design.png";
import { FaUtensils, FaWineGlassAlt, FaLeaf, FaUserTie, FaShieldAlt } from "react-icons/fa";
// import culinary1 from './images/Culinary1.png'

const Culinary = () => {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
<path d="M16.667 70.4167V67.5H86.667V70.4167H16.667ZM19.5837 61.25C19.5837 53.2639 22.3962 46.4063 28.0212 40.6771C33.6462 34.9479 40.5559 31.5972 48.7503 30.625V28.5417C48.7503 27.7778 49.0455 27.1007 49.6357 26.5104C50.226 25.9201 50.9031 25.625 51.667 25.625C52.4309 25.625 53.108 25.9201 53.6982 26.5104C54.2885 27.1007 54.5837 27.7778 54.5837 28.5417V30.625C62.7781 31.5972 69.6878 34.9479 75.3128 40.6771C80.9378 46.4063 83.7503 53.2639 83.7503 61.25H19.5837ZM22.8128 58.3333H80.5212C79.9656 51.6667 76.8753 45.8681 71.2503 40.9375C65.6253 36.0069 59.0976 33.5417 51.667 33.5417C44.2364 33.5417 37.7087 36.0069 32.0837 40.9375C26.4587 45.8681 23.3684 51.6667 22.8128 58.3333Z" fill="#525252"/>
</svg>,
      // image:culinary1,
      title: "High Quality Food",
      desc: "We serve more than food – we serve quality, tradition, and taste in every bite."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
<path d="M29.1667 85.4167V82.2115H48.3979V53.1897L18.1094 19.872V16.6667H81.8906V19.872L51.6021 53.1897V82.2115H70.8333V85.4167H29.1667ZM30.2323 28.4053H69.7677L77.7729 20.048H22.2271L30.2323 28.4053ZM50 50.2647L66.8427 31.6105H33.1573L50 50.2647Z" fill="#525252"/>
</svg>,
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
