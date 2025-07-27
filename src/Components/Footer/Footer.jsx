import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import muqsitlogo from "../../assets/image (4).png"; // This is the image we're targeting
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* WRAP THE IMAGE IN AN <a> TAG */}
          <a
            href="/" // Good for accessibility and fallback
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              window.location.reload(); // Reload the page
            }}
            className="footer-logo-link" // Add a class for potential specific styling
          >
            <img src={muqsitlogo} alt="Website Logo - Click to Reload" />
          </a>
          <p>
            Aspiring Frontend Developer crafting clean and responsive web
            experiences.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" name="" id="" />
          </div>
          <div className="footer-subsrcibe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Abdul Muqsit. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Pollicy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;