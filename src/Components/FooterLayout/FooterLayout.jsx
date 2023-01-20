import React from "react";
import "./FooterLayout.css";

function FooterLayout() {
  return (
    <section className="footer-container">
      <div className="footer-section">
        <h3>Company</h3>
        <p>
          <a href="">Career & Culture</a>
        </p>
        <p>
          <a href="">Press</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          <a href="">About Us</a>
        </p>
        <p>
          <a href="">Copyright</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>Our Information</h3>
        <p>
          <a href="">Privacy Policy</a>
        </p>
        <p>
          <a href="">Terms & Conditions</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>My Account</h3>
        <p>
          <a href="">Create Account</a>
        </p>
        <p>
          <a href="">Login</a>
        </p>
      </div>
      <div className="footer-section">
        <h3>Policy</h3>
        <p>
          <a href="">Application Security</a>
        </p>
        <p>
          <a href="">Software Principles</a>
        </p>
      </div>
    </section>
  );
}

export default FooterLayout;
