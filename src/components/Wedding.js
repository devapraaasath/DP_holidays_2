import React from "react";
import './Wedding.css';
import Wed from "../images/Wedding.jpg";

const Wedding = () => {
  return (
    <div className="wedding-page">
      <div className="wedding-banner">
        <h1>Plan Your Dream Wedding</h1>
      </div>
      <div className="wedding-content">
        <div className="wedding-text">
          <h2>Destination Weddings</h2>
          <p>
            Make your wedding magical with our exclusive destination wedding packages. Whether 
            it’s a serene beach, a royal palace, or a picturesque vineyard, we turn your dreams 
            into reality.
          </p>
          <h2>Our Services</h2>
          <ul>
            <li>Venue Selection</li>
            <li>Wedding Decor</li>
            <li>Luxury Accommodations</li>
            <li>Catering & Entertainment</li>
          </ul>
        </div>
        <img
          src={Wed}
          alt="Wedding"
          className="wedding-image"
        />
      </div>
    </div>
  );
};

export default Wedding;
