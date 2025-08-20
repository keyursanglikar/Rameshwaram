// import React from "react";
// import contact from "./Contact.module.css";
// import headDes from "./images/Heading Design.png";
// import cardDes from "./images/Group.png";
// import cardLoc from "./images/Location.png";
// import cardCall from "./images/Call.png";
// // import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className={contact.contactSection}>
//       {/* Heading */}
//       <h2 className={contact.heading}>
//         We're here to serve <br /> you the finest dining moments
//       </h2>
//       <img src={headDes}alt=""className={contact.headDes}/>
//       {/* Contact Card */}
//       <div className={contact.card}>
//         <div className={contact.cardTopDecoration}></div>
//          <img src={cardDes}alt=""className={contact.cardDes}/>
//         {/* Address */}
//         <div className={contact.infoBlock}>
//           <img src={cardLoc}alt=""className={contact.cardLoc}/>
//           <p className={contact.text}>
//             Rameshwaram Veg <br />
//             Restaurant Solapur – Pune <br/> Hwy, Bhandgaon, <br />
//             Maharashtra 412214
//           </p>
//         </div>

//         {/* Phone */}
//         <div className={contact.infoBlock}>
//           <img src={cardCall}alt=""className={contact.cardCall}/>
//           <p className={contact.text}>
//             Call Us : <br /> +91 98765 43210
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import contact from "./Contact.module.css";
import headDes from "./images/Heading Design.png";
import cardDes from "./images/Group.png";
import cardLoc from "./images/Location.png";
import cardCall from "./images/Call.png";


const Contact = () => {
  return (
    <div className={contact.contactSection}>
      {/* Heading */}
      <h2 className={contact.heading}>
        We're here to serve <br /> you the finest dining moments
      </h2>
      <img src={headDes}alt=""className={contact.headDes}/>
      {/* Contact Card */}
      <div className={contact.card}>
        <div className={contact.cardTopDecoration}></div>
         <img src={cardDes}alt=""className={contact.cardDes}/>
        {/* Address */}
        <div className={contact.infoBlock}>
          <img src={cardLoc}alt=""className={contact.cardLoc}/>
          <p className={contact.text}>
            Rameshwaram Veg <br />
            Restaurant Solapur – Pune <br/> Hwy, Bhandgaon, <br />
            Maharashtra 412214
          </p>
        </div>

        {/* Phone */}
        <div className={contact.infoBlock}>
          <img src={cardCall}alt=""className={contact.cardCall}/>
          <p className={contact.text}>
            Call Us : <br /> +91 98765 43210
          </p>
        </div>
      </div>
       <div className={contact.mapContainer}></div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.386847876253!2d74.3189670746509!3d18.466128370836078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc319e0b37b5eb7%3A0x39419b46771cc6a3!2sRameshwaram%20veg!5e0!3m2!1sen!2sin!4v1755703564624!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
    </div>
    
  );
};

export default Contact;