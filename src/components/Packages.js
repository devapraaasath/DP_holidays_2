import React from "react";
import './Packages.css';
import dubai from '../images/Dubai.jpg';
import maldives from '../images/malavides.jpg';
import paris from '../images/paris.jpg';

const Packages = () => {
  return (
    <div className="packages-container">
      <section className="packages-banner">
        <h1>Explore Our Tour Packages</h1>
        <p>Choose from a variety of packages designed for every traveler.</p>
      </section>

      <section className="packages-list">
        <h2>Featured Packages</h2>
        <div className="package-cards">
          <div className="package-card">
            <img src={dubai} alt="Dubai Package" />
            <h3>Dubai Adventure</h3>
            <p>5 Days, 4 Nights - Starting from $1200</p>
          </div>
          <div className="package-card">
            <img src={maldives} alt="Maldives Package" />
            <h3>Maldives Escape</h3>
            <p>4 Days, 3 Nights - Starting from $1500</p>
          </div>
          <div className="package-card">
            <img src={paris} alt="Paris Package" />
            <h3>Paris Highlights</h3>
            <p>6 Days, 5 Nights - Starting from $2000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
