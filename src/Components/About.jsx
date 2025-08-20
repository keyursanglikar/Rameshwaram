import React from "react";
import about from "./About.module.css";
import aboutImg from "./images/About Us.jpg"; // change if your filename differs
import headingDesign from "./images/Heading Design.png";
import cornerDesign from "./images/About Us Section1.png";
import frame from "./images/frame.png";
const About = () => {
  return (
    <section className={about.aboutSection}>
      <div className={about.grid}>
        {/* Left image */}
        <div className={about.left}>
          <img className={about.leftimage}src={aboutImg} alt="Traditional Indian dishes"/>

          <img
            src={frame}
            alt=""
            className={about.frameDesign}
          />
        </div>

        

        {/* Right content */}
        <div className={about.right}>
          <div className={about.eyebrow}>About</div>
          <h1 className={about.title}>Rameshwaram Veg</h1>
          <img
            src={headingDesign}
            alt=""
            className={about.headingDesign}
          />
          

          <p className={about.copy}>
            Rameshwaram is more than just a restaurant — it’s a celebration of
            India’s diverse culinary traditions. Rooted in South Indian culture
            yet open to pan-Indian flavours, we bring together the bold spices
            of the North and the soulful simplicity of the South. From buttery
            naans to crisp dosas, tangy chaats to comforting rasam rice – we
            craft every dish with purity, passion, and a pinch of tradition.
          </p>

           {/* Bottom-right decorative image */}
          <img
            src={cornerDesign}
            alt=""
            className={about.cornerDesign}
          />

        </div>
      </div>
    </section>
  );
};

export default About;
