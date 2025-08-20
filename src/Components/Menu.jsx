import React from "react";
import styles from "./Menu.module.css";

// Import your 8 images
import img1 from "./images/Menu 1.jpg";
import img2 from "./images/Menu 2.png";
import img3 from "./images/Menu 3.jpg";
import img4 from "./images/Menu 4.jpg";
import img5 from "./images/Menu 5.jpg";
import img6 from "./images/Menu 6.jpg";
import img7 from "./images/Menu 7.jpg";
import img8 from "./images/Menu 8.jpg";

const Menu = () => {
  const items = [
    { id: 1, name: "Medu Vada", image: img1 },
    { id: 2, name: "Dal Wada", image: img2 },
    { id: 3, name: "Palak Paneer", image: img3 },
    { id: 4, name: "Rajma Chawal", image: img4 },
    { id: 5, name: "Veg Biryani", image: img5 },
    { id: 6, name: "Idli", image: img6 },
    { id: 7, name: "Masala Dosa", image: img7 },
    { id: 8, name: "Moong Dal Halwa", image: img8 },
  ];
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.name} />
          <div className={styles.overlay}>
            <div className={styles.icon}>🍴</div>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
