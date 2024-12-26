import React from "react";
import "./Home.css";
import HeroBanner from "./HeroBanner";
import FeaturedPackages from "./FeaturedPackages";
import Testimonials from "./Testimonials";


// Import images directly
import dubaiImg from "../images/Dubai.jpg";
import maldivesImg from "../images/malavides.jpg";
import parisImg from "../images/paris.jpg";
import switzerlandImg from "../images/swizer.jpg";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={parisImg} alt="Paris" />
            <h3>Paris</h3>
            <p>The city of lights awaits you.</p>
          </div>
          <div className="destination-card">
            <img src={maldivesImg} alt="Maldives" />
            <h3>Maldives</h3>
            <p>Relax in the tropical paradise.</p>
          </div>
          <div className="destination-card">
            <img src={switzerlandImg} alt="Switzerland" />
            <h3>Switzerland</h3>
            <p>Explore the scenic Alps.</p>
          </div>
          <div className="destination-card">
            <img src={dubaiImg} alt="Dubai" />
            <h3>Dubai</h3>
            <p>Discover luxury and adventure.</p>
          </div>
        </div>
      </div>
      <FeaturedPackages />
      <div className="special-offers">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <h3>Honeymoon in Bali</h3>
            <p>Enjoy 5 nights at a luxury resort. Starting at $999!</p>
          </div>
          <div className="offer-card">
            <h3>European Getaway</h3>
            <p>Explore 5 countries in 10 days. Limited-time offer!</p>
          </div>
          <div className="offer-card">
            <h3>Adventure in Africa</h3>
            <p>Safari tours starting at $899. Book now!</p>
          </div>
        </div>
      </div>
      <Testimonials />
      
    </div>
  );
};

export default Home;
