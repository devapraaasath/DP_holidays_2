import React from "react";
import "./FeaturedPackages.css";

const FeaturedPackages = () => {
  return (
    <div className="featured-packages">
      <h2>Featured Packages</h2>
      <div className="package-grid">
        <div className="package-card">Group Tours</div>
        <div className="package-card">Foreign Tours</div>
        <div className="package-card">Honeymoon Packages</div>
        <div className="package-card">Adventure Trips</div>
      </div>
    </div>
  );
};

export default FeaturedPackages;
