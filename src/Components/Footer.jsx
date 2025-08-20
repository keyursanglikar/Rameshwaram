import React from "react";
import footer from "./Footer.module.css";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import logo from "./images/Logo Footer.png"; 

const Footer = () => {
  return (
    <footer className={footer.footer}>
      {/* Logo Section */}
      <div className={footer.logoSection}>
        <img src={logo} alt="Rameshwaram Logo" className={footer.logo} />
      </div>

      {/* Footer Content */}
      <div className={footer.footerContent}>
        {/* Address */}
        <div className={footer.column}>
          <h3 className={footer.columnTitle}>Address</h3>
          <p>
            Rameshwaram Veg Restaurant <br />
            Solapur – Pune Hwy, Bhandgaon, <br />
            Maharashtra 412214
          </p>
        </div>

        <div className={footer.divider}></div>

        {/* Middle Text */}
        <div className={footer.column1}>
          <p>
            Bringing <br />
            South Indian, <br />
            Maharashtrian & <br />
            North Indian <br />
            Flavors to Your Plate.
          </p>
        </div>

        <div className={footer.divider}></div>

        {/* Contact */}
        <div className={footer.column}>
          <h3 className={footer.columnTitle}>Contact Us</h3>
          <p>rameshwaramveg@gmail.com</p>
          <p>+91 8888252588</p>
          <div className={footer.social}>
            <span>Follows Us :</span>
            <FaFacebookF className={footer.icon} />
            <FaGoogle className={footer.icon} />
            <FaInstagram className={footer.icon} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={footer.copy}>
        Copyright: © 2025 Rameshwaram Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
