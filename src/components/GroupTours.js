import React from 'react';
import groupToursBanner from '../images/group-tours-banner.jpg';  // Import the image
import './GroupTours.css';
import adventure from '../images/adventure.jpg';
import culture from '../images/culture.jpg';
import holiday from '../images/holidays.jpg';
import dubaiImg from "../images/Dubai.jpg";

import parisImg from "../images/paris.jpg";
import switzerlandImg from "../images/swizer.jpg";
const GroupTours = () => {
  return (
    <div>
      <section className="group-tours-hero">
        <img src={groupToursBanner} alt="Group Tours Banner" className="hero-image" />
        <h1>Explore Our Group Tours</h1>
      </section>
      {/* Tour Categories */}
      <section className="tour-categories">
        <h2>Our Group Tour Categories</h2>
        <div className="categories">
          <div className="category">
            <img src={adventure} alt="Adventure Tours" />
            <h3>Adventure Tours</h3>
            <p>Discover thrilling adventures with your friends.</p>
          </div>
          <div className="category">
            <img src={culture} alt="Cultural Tours" />
            <h3>Cultural Tours</h3>
            <p>Experience diverse cultures and histories.</p>
          </div>
          <div className="category">
            <img src={holiday}alt="Holiday Packages" />
            <h3>Holiday Packages</h3>
            <p>Enjoy a relaxing holiday with loved ones.</p>
          </div>
        </div>
      </section>

      {/* Featured Group Tours */}
      <section className="featured-tours">
        <h2>Featured Group Tours</h2>
        <div className="tour-list">
          <div className="tour-card">
            <img src={dubaiImg} alt="Dubai Tour" />
            <h3>Dubai Adventure</h3>
            <p>Explore the city of wonders with a group of adventurers.</p>
            <button>Book Now</button>
          </div>
          <div className="tour-card">
            <img src={parisImg}alt="Paris Tour" />
            <h3>Paris City Tour</h3>
            <p>Discover the beauty and history of Paris in a group setting.</p>
            <button>Book Now</button>
          </div>
          <div className="tour-card">
            <img src={switzerlandImg} alt="Switzerland Tour" />
            <h3>Switzerland Nature Tour</h3>
            <p>Enjoy the serene beauty of Switzerland with fellow travelers.</p>
            <button>Book Now</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join a Group Tour Today!</h2>
        <p>Book a spot on one of our exciting group tours now!</p>
        <button>Book Your Tour</button>
      </section>
    
    </div>
  );
};

export default GroupTours;
