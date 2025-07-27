import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

import muqsit_gpt from "../../assets/MuqsitProfile.png";
import muqsit from "../../assets/MuqsitProfile.png";
import muqsit2 from "../../assets/MuqsitProfile_cropped.png"; 
import muqsit3 from "../../assets/MuqsitProfile_cropped2.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={muqsit2} alt="Your Profile Picture" />
      <h1>
        <span> I'm Abdul Muqsit, </span>
        {/* FrontEnd Developer Based In Hyderabad. */}
      </h1>
      <p>
        An aspiring <strong>Frontend Web Developer </strong> focused on crafting sleek, user-centric interfaces, while gradually exploring backend technologies to deliver complete web solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="https://drive.google.com/file/d/1vagHavVHkmvfHuI-Pkk-hV4-Se6iipMv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;