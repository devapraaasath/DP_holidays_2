import React from "react";
import './Honeymoon.css';
import paris from "../images/paris.jpg";
import maldives from  "../images/malavides.jpg";
import switzerland from "../images/swizer.jpg";
const Honeymoon = () => {
  return (
    <div className="honeymoon-page">
      <div className="honeymoon-header">
        <h1>Unforgettable Honeymoons</h1>
        <p>Start your married life with a perfect getaway!</p>
      </div>
      <div className="honeymoon-grid">
        <div className="honeymoon-item">
          <img src={maldives}alt="Maldives" />
          <h3>Maldives</h3>
        </div>
        <div className="honeymoon-item">
          <img src={paris} alt="Paris" />
          <h3>Paris</h3>
        </div>
        <div className="honeymoon-item">
          <img src={switzerland} alt="Switzerland" />
          <h3>Switzerland</h3>
        </div>
      </div>
    </div>
  );
};

export default Honeymoon;
