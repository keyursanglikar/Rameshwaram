// import React from "react";
// import footer from "./Footer.module.css";
// import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
// import logo from "./images/Logo Footer.png"; 

// const Footer = () => {
//   return (
//     <footer className={footer.footer}>
//       {/* Logo Section */}
//       <div className={footer.logoSection}>
//         <img src={logo} alt="Rameshwaram Logo" className={footer.logo} />
//       </div>

//       {/* Footer Content */}
//       <div className={footer.footerContent}>
//         {/* Address */}
//         <div className={footer.column}>
//           <h3 className={footer.columnTitle}>Address</h3>
//           <p>
//             Rameshwaram Veg Restaurant <br />
//             Solapur – Pune Hwy, Bhandgaon, <br />
//             Maharashtra 412214
//           </p>
//         </div>

//         <div className={footer.divider}></div>

//         {/* Middle Text */}
//         <div className={footer.column1}>
//           <p>
//             Bringing <br />
//             South Indian, <br />
//             Maharashtrian & <br />
//             North Indian <br />
//             Flavors to Your Plate.
//           </p>
//         </div>

//         <div className={footer.divider}></div>

//         {/* Contact */}
//         <div className={footer.column}>
//           <h3 className={footer.columnTitle}>Contact Us</h3>
//           <p>rameshwaramveg@gmail.com</p>
//           <p>+91 8888252588</p>
//           <div className={footer.social}>
//             <span>Follows Us :</span>
//             <FaFacebookF className={footer.icon} />
//             <FaGoogle className={footer.icon} />
//             <FaInstagram className={footer.icon} />
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className={footer.copy}>
//         Copyright: © 2025 Rameshwaram Restaurant. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



.footer {
  color: #fff;
  text-align: center;
  padding: 40px 20px 20px;
background: var(--Primary-color, #193028);
height: 60vh;
align-self: stretch;
margin-top: -54px;
}

.logoSection {
  margin-bottom: 5px;
}

.logo {
width: 15vw;
height: 21vh;
flex-shrink: 0;
aspect-ratio: 155/107;
}

.footerContent {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  margin: 10px auto 0 auto;
  max-width: 1000px;
}

.column {
flex: 1;
padding: 0 20px;
color: #FFF;
text-align: center;
font-family: Montaga;
font-size: 1.3vw;
font-style: normal;
font-weight: 400;
line-height: normal;

}

.column1 p{
color: #FFF;
text-align: center;
font-family: Montaga;
font-size: 1.2vw;
font-style: normal;
font-weight: 400;
line-height: 34px; /* 184.375% */
}

.columnTitle {
  margin-bottom: 0px;
color: var(--Secondary-color, #CE9F0B);
text-align: center;
font-family: Montaga;
font-size:2.3vw;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.divider {
  width: 1px;
  background: #CE9F0B;
}

.social {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
color: #FFF;
text-align: center;
font-family: Montaga;
font-size: 1.5vw;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.icon {
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.3s;
}

.copy {
  margin-top: 20px;
  border-top: 1.5px solid rgba(206, 159, 11, 1);
  padding-top: 15px;
  color: var(--Grey, #7F7F7F);
font-family: Montaga;
font-size: 1.0vw;
font-style: normal;
font-weight: 400;
line-height: normal;
}