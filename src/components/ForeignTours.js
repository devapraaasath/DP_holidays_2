import React from "react";
import './ForeignTours.css';
import dubai from  "../images/Dubai.jpg";
import paris from "../images/paris.jpg";
import maldives from  "../images/malavides.jpg";
import switzerland from "../images/swizer.jpg";

const ForeignTours = () => {
  return (
    <div className="foreign-tours-container">
      <section className="foreign-tours-banner">
        <h1>Explore Our Foreign Tours</h1>
        <p>Discover amazing destinations across the globe with our expertly curated tours.</p>
      </section>

      <section className="foreign-tours-packages">
        <h2>Top Destinations</h2>
        <div className="packages-grid">
          <div className="package-card">
            <img src={paris} alt="Paris" />
            <h3>Paris, France</h3>
            <p>Experience the City of Lights with its iconic landmarks and romantic charm.</p>
          </div>
          <div className="package-card">
            <img src={dubai} alt="Dubai" />
            <h3>Dubai, UAE</h3>
            <p>Witness the luxury, skyscrapers, and desert adventures in Dubai.</p>
          </div>
          <div className="package-card">
            <img src={maldives} alt="Maldives" />
            <h3>Maldives</h3>
            <p>Relax on pristine beaches and explore the vibrant marine life in the Maldives.</p>
          </div>
          <div className="package-card">
            <img src={switzerland} alt="Switzerland" />
            <h3>Switzerland</h3>
            <p>Admire the breathtaking Alpine scenery and charming villages.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForeignTours;
