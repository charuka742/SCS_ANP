import React from "react";
import "./Footer.css";
import logo from "photos/logo1.jpg";
import { Link } from "react-router-dom";

function Footer() {
  interface User {
    userId: number;
    fname: string;
    lname: string;
    role: string;
    // add any other properties that your user object has
  }

  const userJson = localStorage.getItem("loggedUser");
  const user: User | null = userJson ? JSON.parse(userJson) : null;

  return (
    <div>
      <div className="empty-footer"></div>
      <div className="footer-section">
        <div className="details-section" id="first-column">
          <div>
            <img className="logo-tree" src={logo} alt="tree" />
          </div>
          <div className="campus-details">
            <h4>University of Peradeniya</h4>
            <p className="details" id="contact">
              Address
            </p>
            <p className="details" id="contact">
              Phone Number
            </p>
          </div>
        </div>
        <div className="details-section" id="main">
          <h6>Main Navigation</h6>
          <ul id="untitle-list">
            <li className="details" id="link">
              <Link to="/about">About</Link>
            </li>
            <li className="details" id="link">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="details" id="link">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="details" id="link">
              <Link to="/book">Book Now</Link>
            </li>
          </ul>
        </div>
        <div className="details-section" id="quick">
          <h6>Quick Links</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
