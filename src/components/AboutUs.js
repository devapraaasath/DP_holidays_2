import React from "react";
import './AboutUs.css';
import About from "../images/About.jpg";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your Journey, Our Passion</p>
      </div>
      <div className="about-content">
        <img
          src={About}
          alt="About Us"
          className="about-image"
        />
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At DP Holidays, we’ve been crafting memorable travel experiences for over a decade. 
            With a passion for exploring the world and a commitment to excellence, we aim to make 
            every journey unforgettable. From exotic locations to luxurious accommodations, we tailor 
            experiences that suit your preferences.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional travel services, creating memorable experiences 
            that inspire and delight. We’re committed to sustainability and promoting responsible tourism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
