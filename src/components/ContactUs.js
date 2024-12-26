import React from "react";
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for any inquiries or assistance.</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>123, Travel Street, Wanderlust City, Dreamland</p>
          <p>Email: contact@DPholidays.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
