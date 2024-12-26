import React from "react";
import './Cruises.css';

const Cruises = () => {
  return (
    <div className="cruises-container">
      <section className="cruises-banner">
        <h1>Luxury Cruises</h1>
        <p>Set sail on an unforgettable journey with our exclusive cruise packages.</p>
      </section>

      <section className="cruises-details">
        <h2>Why Choose Our Cruises?</h2>
        <ul>
          <li>Luxurious accommodations</li>
          <li>Gourmet dining options</li>
          <li>Exotic destinations</li>
          <li>World-class entertainment</li>
        </ul>
      </section>
    </div>
  );
};

export default Cruises;
