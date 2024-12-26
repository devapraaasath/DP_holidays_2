import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar animate__animated animate__fadeIn">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {/* Group Tours Dropdown */}
        <li className="dropdown">
          <Link to="/group-tours" className="dropdown-link">
            Group Tours
          </Link>
          {/* <div className="dropdown-menu">
            <Link to="/group-tours/adventure">Adventure Tours</Link>
            <Link to="/group-tours/cultural">Cultural Tours</Link>
            <Link to="/group-tours/holiday">Holiday Packages</Link>
          </div> */}
        </li>

        {/* Packages */}
        <li><Link to="/packages">Packages</Link></li>

        {/* Foreign Tours Dropdown */}
        <li className="dropdown">
          <Link to="/foreign-tours" className="dropdown-link">
            Foreign Tours
          </Link>
          {/* <div className="dropdown-menu">
            <Link to="/foreign-tours/asia">Asia Tours</Link>
            <Link to="/foreign-tours/europe">Europe Tours</Link>
            <Link to="/foreign-tours/america">America Tours</Link>
          </div> */}
        </li>

        {/* Honeymoon */}
        <li><Link to="/honeymoon">Honeymoon</Link></li>

        {/* Cruises */}
        <li><Link to="/cruises">Cruises</Link></li>

        {/* Wedding */}
        <li><Link to="/wedding">Wedding</Link></li>

        {/* About Us */}
        <li><Link to="/about">About Us</Link></li>

        {/* Contact */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
