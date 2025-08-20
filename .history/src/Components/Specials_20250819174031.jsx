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



import React, { useState, useEffect } from 'react';
import specials from './Specials.module.css';
import headDesign from './images/Heading Design.png';
import pohaImage from './images/Sub Menu 3.webp';
import upmaImage from './images/Sub Menu 4.jpg';
import masaladosaImage from './images/Masala Dosa.png';
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
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
    {
      name: "Vegan brunch",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
    {
      name: "Smoked Salmon Crostini",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
  ],
  "Lunch Meals": [
    {
      name: "Gujarati Thali",
      description: "Crispy South Indian dosa served with chutneys and sambar.",
      image: pohaImage,
    },
    {
      name: "Hyderabadi Veg Biryani Thali",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
    {
      name: "Chole Bhature",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
  ],
  "Evening Snacks": [
    {
      name: "Sabudana Vada",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
    {
      name: "Kanda Bhaji",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },{
      name: "Veg Cutlet",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
  ],
  "Dinner Delights": [
    {
      name: "North Indian Thali",
      description:
        "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
    },
    {
      name: "Amritsari Kulcha",
      description:
        "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
    },{
      name: "Matar Paneer",
      description:
        "Creamy, rich curry with paneer cubes cooked in a tomato-based gravy.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Paneer_Butter_Masala.jpg",
    },
  ],
  Desserts: [
    {
      name: "Rice Pudding",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },
    {
      name: "Gulab Jamun",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
    },{
      name: "Chocolate Truffle Cake",
      description:
        "Crispy South Indian dosa served with chutneys and sambar.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_dish.jpg",
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

export default SpecialsPage;
