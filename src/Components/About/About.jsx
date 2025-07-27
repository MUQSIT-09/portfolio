import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
import muqsit from "../../assets/MuqsitProfile.png";
import muqsit2 from "../../assets/MuqsitProfile_cropped.png";
import muqsit3 from "../../assets/MuqsitProfile_cropped2.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={muqsit3} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a <strong> passionate Web Developer </strong> with a strong focus on frontend
              technologies and a growing familiarity with deployment practices.
              I enjoy building responsive and user-friendly web applications
              using HTML, CSS, and JavaScript, with an eye for clean design and
              seamless user experience.
            </p>
            {/* <p>
              On the DevOps side, I've worked with tools like Jenkins and
              Ansible, performing tasks such as automating builds, deploying WAR
              files to test servers, and managing simple CI/CD pipelines. I also
              have basic experience deploying applications on AWS EC2 instances.
            </p> */}
            <p>
              Additionally, I've used Selenium for basic automation
              testing—particularly for automating form submissions and
              simulating user interactions across various websites to validate
              functionality.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{ width: "92%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "73%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "62%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p> <hr style={{ width: "76%" }} />
            </div>
            <div className="about-skill">
              <p>Selenium </p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF LEARNING </p>
          <p>& BUILDING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLEETD</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
