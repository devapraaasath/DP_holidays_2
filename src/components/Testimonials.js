import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"DP Holidays made our honeymoon trip truly special!"</p>
          <h4>- John & Jane</h4>
        </div>
        <div className="testimonial-card">
          <p>"A seamless experience from start to finish."</p>
          <h4>- Sarah K.</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
