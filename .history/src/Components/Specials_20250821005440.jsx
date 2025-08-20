// import React, { useState, useEffect } from 'react';
// import specials from './Specials.module.css';
// import headDesign from './images/Heading Design.png';
// import pohaImage from './images/Sub Menu 3.webp';
// import upmaImage from './images/Sub Menu 4.jpg';
// import masaladosaImage from './images/Masala Dosa.png';
// import subImage from './images/Sub Menu1.jpg';

// const specialsData = {
//   Breakfast: [
//     {
//       name: "Masala Dosa",
//       description:
//         "Poha is a light and healthy dish made from flattened rice, tempered with mustard seeds, curry leaves, onions, and spices. Served fresh with a touch of lemon and garnished with coriander.",
//       image:masaladosaImage,
//     },
//     {
//       name: "Poha",
//       description:
//         "Poha is a light and healthy dish made from flattened rice, tempered with mustard seeds, curry leaves, onions, and spices. Served fresh with a touch of lemon and garnished with coriander.",
//       image:pohaImage,
//     },
//     {
//       name: "Upma",
//       description:
//         "Upma is a soft, savory South Indian dish made from semolina and tempered with spices and herbs. Fresh and light, perfect for a wholesome start to your day.",
//       image:upmaImage,
//     },
//   ],
//   Brunch: [
//     {
//       name: "Veg Pizza Sliders",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Vegan brunch",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Smoked Salmon Crostini",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Lunch Meals": [
//     {
//       name: "Gujarati Thali",
//       description: "Crispy South Indian dosa served with chutneys and sambar.",
//       image: pohaImage,
//     },
//     {
//       name: "Hyderabadi Veg Biryani Thali",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Chole Bhature",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Evening Snacks": [
//     {
//       name: "Sabudana Vada",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Kanda Bhaji",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },{
//       name: "Veg Cutlet",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Dinner Delights": [
//     {
//       name: "North Indian Thali",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },
//     {
//       name: "Amritsari Kulcha",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },{
//       name: "Matar Paneer",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },
//   ],
//   Desserts: [
//     {
//       name: "Rice Pudding",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Gulab Jamun",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },{
//       name: "Chocolate Truffle Cake",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
// };

// const SpecialsPage = () => {
//   const [activeCategory, setActiveCategory] = useState("Breakfast");
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const dishes = specialsData[activeCategory];

//   //  useEffect(() => {
//   //    const interval = setInterval(() => {
//   //      setScrollIndex((prev) => (prev + 1) % dishes.length);
//   //    }, 2000)// Auto-scroll every 1sec
//   //    return () => clearInterval(interval);
//   //  }, [dishes]);

//   return (
//     <div className={specials['Special-Container']}>
//       <div className={specials['special-heading']}>
//         <h2>Rameshwaram Specials</h2>
//         <h1>Start Your Day With Flavourful Traditions</h1>
//         <img src={headDesign} alt="" className={specials.headDesign} />
//       </div>

//       {/* Navigation Tabs */}
//       <div className={specials.navbar}>
//         {Object.keys(specialsData).map((category) => (
//           <span
//             key={category}
//             className={`${specials.navItem} ${
//               activeCategory === category ? specials.active : ""
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </span>
//         ))}
//       </div>

//       {/* Content */}
//       <div className={specials.content}>
//         {/* Left: Dish Details */}

//         <div className={specials.leftImage}>
//           <img src={subImage} alt="Sub Menu1" />
//         </div>

//         {/* Right: Scrolling Images */}
//           <div className={specials.imageSection}>
//           <div className={specials.imageScroller}
//             // style={{ transform: `translateY(-${scrollIndex * 250}px)` }}
//           >
//             {/* {dishes.map((dish, index) => (
//               <img
//                 key={index}
//                 src={dish.image}
//                 alt={dish.name}
//                 className={specials.dishImage}
//               />  */}

//                {[...dishes, ...dishes].map((dish, index) => (
//               <div className={specials.card} key={index}>
//                 <img
//                   src={dish.image}
//                   alt={dish.name}
//                   className={specials.dishImage}
//                 />
                
//                 {/* <div className={specials.overlay}>
//                   <h3>{dish.name}</h3>
//                   <p>{dish.description}</p>
//                 </div> */}
//               </div>

//             ))}
//           </div>
//         </div>
//         <div className={specials.textSection}>
//           <h2 className={specials.dishName}>{dishes[scrollIndex].name}</h2>
//           <p className={specials.description}>{dishes[scrollIndex].description}</p>
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default SpecialsPage;



// import React, { useState, useEffect } from 'react';
// import specials from './Specials.module.css';
// import headDesign from './images/Heading Design.png';
// import pohaImage from './images/Sub Menu 3.webp';
// import upmaImage from './images/Sub Menu 4.jpg';
// import masaladosaImage from './images/Masala Dosa.png';
// import subImage from './images/Sub Menu1.jpg';

// const specialsData = {
//   Breakfast: [
//     {
//       name: "Masala Dosa",
//       description: "Masala Dosa is a crispy South Indian crepe made from rice and urad dal, served with chutneys and sambar. At Rameshwaram, it’s freshly made and full of authentic flavor.",
//       image: masaladosaImage,
//     },
//     {
//       name: "Poha",
//       description: "Poha is a light and healthy dish made from flattened rice, tempered with mustard seeds, curry leaves, onions, and spices. At Rameshwaram, it’s served fresh with a touch of lemon and garnished with coriander for a perfect start to your day.",
//       image: pohaImage,
//     },
//     {
//       name: "Upma",
//       description: "Upma is a soft, savory South Indian dish made from semolina, tempered with spices and herbs. At Rameshwaram, it's served fresh and light, perfect for a wholesome start to your day.",
//       image: upmaImage,
//     },
//   ],
//   // ... (rest of your data remains the same)
//   Brunch: [
//     {
//       name: "Veg Pizza Sliders",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Vegan brunch",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Smoked Salmon Crostini",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Lunch Meals": [
//     {
//       name: "Gujarati Thali",
//       description: "Crispy South Indian dosa served with chutneys and sambar.",
//       image: pohaImage,
//     },
//     {
//       name: "Hyderabadi Veg Biryani Thali",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Chole Bhature",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Evening Snacks": [
//     {
//       name: "Sabudana Vada",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Kanda Bhaji",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },{
//       name: "Veg Cutlet",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
//   "Dinner Delights": [
//     {
//       name: "North Indian Thali",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },
//     {
//       name: "Amritsari Kulcha",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },{
//       name: "Matar Paneer",
//       description:
//         "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
//     },
//   ],
//   Desserts: [
//     {
//       name: "Rice Pudding",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//     {
//       name: "Gulab Jamun",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },{
//       name: "Chocolate Truffle Cake",
//       description:
//         "Crispy South Indian dosa served with chutneys and sambar.",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
//     },
//   ],
// };

// const SpecialsPage = () => {
//   const [activeCategory, setActiveCategory] = useState("Breakfast");

//   const dishes = specialsData[activeCategory];

//   return (
//     <div className={specials['Special-Container']}>
//       <div className={specials['special-heading']}>
//         <h2>Rameshwaram Specials</h2>
//         <h1>Start Your Day With Flavourful Traditions</h1>
//         <img src={headDesign} alt="" className={specials.headDesign} />
//       </div>

//       {/* Navigation Tabs */}
//       <div className={specials.navbar}>
//         {Object.keys(specialsData).map((category) => (
//           <span
//             key={category}
//             className={`${specials.navItem} ${
//               activeCategory === category ? specials.active : ""
//             }`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </span>
//         ))}
//       </div>

//       {/* Content */}
//       <div className={specials.content}>
//         {/* Left: Dish Details */}
//         <div className={specials.leftImage}>
//           <img src={subImage} alt="Sub Menu1" />
//         </div>

//         {/* Right: Scrolling Images with Info */}
//         <div className={specials.imageSection}>
//           <div className={specials.imageScroller}>
//             {[...dishes, ...dishes].map((dish, index) => (
//               <div className={specials.card} key={index}>
//                 <div className={specials.imageContainer}>
//                   <img
//                     src={dish.image}
//                     alt={dish.name}
//                     className={specials.dishImage}
//                   />
//                 </div>
//                 <div className={specials.dishInfo}>
//                   <h3>{dish.name}</h3>
//                   <p>{dish.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialsPage;


import React, { useState, useEffect } from 'react';
import specials from './Specials.module.css';
import headDesign from './images/Heading Design.png';
import pohaImage from './images/Sub Menu 3.webp';
import upmaImage from './images/Sub Menu 4.jpg';
import masaladosaImage from './images/Masala Dosa.png';
import pizzaImage from './images/Brunch 3.jpg';
import veganImage from './images/Brunch 2.jpg';
import crostiniImage from './images/Brunch 4.jpg';
import gujaratiImage from './images/Lunch meal1.webp';
import biryaniImage from './images/L';
import choleBhatureImage from './images/Lunch meal 3.jpg';
import sabudanaVadaImage from './images/eavening Snacks 1.jpg';
import bhajiImage from './images/eavening Snacks 3.jpg';
import cutletImage from './images/eavening Snacks 2.jpg';
import northIndianThaliImage from './images/Dinner 2.jpg';
import amritsariKulchaImage from './images/Dinner 3.jpg';
import matarPaneerImage from './images/Dinner 4.jpg';
import ricePuddingImage from './images/Dessert 1.jpg';
import gulabImage from './images/Dessert 3.jpg';
import chocolateImage from './images/Dessert 4.jpg';

import subImage from './images/Sub Menu1.jpg';

const specialsData = {
  Breakfast: [
    {
      name: "Masala Dosa",
      description: "Masala Dosa is a crispy South Indian crepe made from rice and urad dal, served with chutneys and sambar. At Rameshwaram, it’s freshly made and full of authentic flavor.",
      image: masaladosaImage,
    },
    {
      name: "Poha",
      description: "Poha is a light and healthy dish made from flattened rice, tempered with mustard seeds, curry leaves, onions, and spices. At Rameshwaram, it’s served fresh with a touch of lemon and garnished with coriander for a perfect start to your day.",
      image: pohaImage,
    },
    {
      name: "Upma",
      description: "Upma is a soft, savory South Indian dish made from semolina, tempered with spices and herbs. At Rameshwaram, it's served fresh and light, perfect for a wholesome start to your day.",
      image: upmaImage,
    },
  ],
  // ... (rest of your data remains the same)
  Brunch: [
    {
      name: "Veg Pizza Sliders",
      description:
        "Veg Pizza Sliders are bite-sized delights made with soft buns, loaded with cheesy goodness, spicy pizza sauce, and a mix of fresh vegetables.",
      image: pizzaImage,
    },
    {
      name: "Vegan Brunch",
      description:
        "Vegan Brunch is a delicious mid-morning meal featuring plant-based dishes like tofu scrambles,avocado toast,fresh fruit, smoothies,and cruelty-free pastries--perfect for a healthy and satisfying start to your day.",
      image: veganImage,
    },
    {
      name: "Smoked Salmon Crostini",
      description:
        "Smoked Salmon Crostini is a crisp t0asted bread slice topped with creamy vegan spread, smoked salmon-style carrot, and herbs -- a flavorful, elegant bite for vegan brunch.",
      image: crostiniImage,
    },
  ],
  "Lunch Meals": [
    {
      name: "Gujarati Thali",
      description: "Gujarati Thali is a traditional meal with roti, rice, dal, sabzi, chutney, and a sweet dish, offering a perfect blend of sweet and savory flavors.",
      image: gujaratiImage,
    },
    {
      name: "Hyderabadi Veg Biryani Thali",
      description:
        "Hyderabadi Veg Biryani Thali features aromatic basmati rice cooked with spices and vegetables, served with raita, salan, and a sweet dish -- a flavorful feast from Hyderabad.",
      image:
        biryaniImage,
    },
    {
      name: "Chole Bhature",
      description:
        "Chole Bhature is a popular North Indian dish featuring spicy chickpeas(chole) served with deep-fried, fluffy bread(bhature)--a hearty and indulgent meal.",
      image:
       choleBhatureImage,
    },
  ],
  "Evening Snacks": [
    {
      name: "Sabudana Vada",
      description:
        "Sabudana Vada is a crispy and delicious Maharashtrian snack made from tapioca pearls, mashed potatoes, and peanuts -- perfect for fasting or as a light tea-time treat.",
      image:
        sabudanaVadaImage,
    },
    {
      name: "Kanda Bhaji",
      description:
        "Kanda Bhaji is a popular Maharashtrian street snack made with thinly sliced onions coated in a spiced gram flour batter and deep-fried until golden and crispy.",
      image:
        bhajiImage,
    },{
      name: "Veg Cutlet",
      description:
        "Veg Cutlet is a crispy snack made from mixed veggies and spices, perfect for tea-time or a starter.",
      image:
        cutletImage,
    },
  ],
  "Dinner Delights": [
    {
      name: "North Indian Thali",
      description:
        "North Indian Thali is a wholesome platter featuring rich and flavorful dishes like dal tadka, paneer curry, dal makhani, jeera rice, and soft naan or roti --offering a perfect balance of taste and tradition in every bite.",
      image:
       northIndianThaliImage,
    },
    {
      name: "Amritsari Kulcha",
      description:
        "Amritsari Kulcha is a stuffed flatbread from Punjab, known for its spicy potato filling and crispy, buttery layers.",
      image:
        amritsariKulchaImage,
    },{
      name: "Matar Paneer",
      description:
        "Matar Paneer is a North Indian curry made with paneer and green peas in a spiced tomato gravy.",
      image:
        matarPaneerImage,
    },
  ],
  Desserts: [
    {
      name: "Rice Pudding",
      description:
        "Rice Pudding is a creamy dessert made from slow-cooked rice, milk, and sugar, lightly flavored with cardamom and garnished with dry fruits.",
      image:
        ricePuddingImage,
    },
    {
      name: "Gulab Jamun",
      description:
        "Gulab Jamun is a soft, syrup-soaked Indian dessert made from milk solids, deep-fried and infused with cardamom-scented sugar syrup.",
      image:
        gulabImage,
    },{
      name: "Chocolate Truffle Cake",
      description:
        "Chocolate Truffle Cake is a rich, moist, and decadent dessert layered with smooth chocolate ganache and often topped with berries for an elegant finish.",
      image:
        chocolateImage,
    },
  ],
};

const SpecialsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const dishes = specialsData[activeCategory];

  return (
    <div className={specials['Special-Container']}>
      <div className={specials['special-heading']}>
        <h2>Rameshwaram Specials</h2>
        <h1>Start Your Day With Flavourful Traditions</h1>
        <img src={headDesign} alt="" className={specials.headDesign} />
      </div>

      {/* Navigation Tabs */}
      <div className={specials.navbar}>
        {Object.keys(specialsData).map((category) => (
          <span
            key={category}
            className={`${specials.navItem} ${
              activeCategory === category ? specials.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className={specials.content}>
        {/* Left: Dish Details */}
        <div className={specials.leftImage}>
          <img src={subImage} alt="Sub Menu1" />
        </div>

        {/* Right: Scrolling Images with Info */}
        <div className={specials.imageSection}>
          <div className={specials.imageScroller}>
            {[...dishes, ...dishes].map((dish, index) => (
              <div className={specials.card} key={index}>
                <div className={specials.imageContainer}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className={specials.dishImage}
                  />
                </div>
                <div className={specials.dishInfo}>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialsPage;