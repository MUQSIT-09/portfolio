import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import instagram_icon from "../../assets/Instagram_white.png";
import instagram_icon2 from "../../assets/Instagram_color.png";
import linkedin_icon from "../../assets/linkdin_color.png";
import twitter_icon from "../../assets/x_white.png";
import youtube_icon from "../../assets/youtube_white.png";
import youtube_icon2 from "../../assets/youtube_white4.png";

const Contact = () => {
  // ✅ Move onSubmit OUTSIDE the return block
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2e9d97c6-99c4-4f37-8ba8-efceb0b7d7e2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  // ✅ Now return your JSX safely
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm open to new projects, freelance work, or collaborations. Whether
            it’s a quick chat or a big idea, feel free to reach out—I'd love to
            connect and create something awesome together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <a
                href="mailto:Abdulmuqsit931@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mail_icon} alt="Gmail" />
              </a>
              <a
                href="mailto:Abdulmuqsit931@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Abdulmuqsit931@gmail.com</p>
              </a>
            </div>

            <div className="contact-detail">
              <a
                href="tel:+918519801753"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={call_icon} alt="Phone" />
              </a>

              <p>+91 8519801753</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Hyderabad, India</p>
            </div>
            <div className="contact-detail">
              <a
                href="https://www.linkedin.com/in/abdulmuqsit9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin_icon} alt="LinkedIn" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulmuqsit9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>

            <div className="contact-detail">
              <a
                href="https://x.com/AbdulMuqsit09?t=WCtpYrTEXmgFZTzupoXn3A&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter_icon} alt="Twitter" />
              </a>
              <a
                href="https://x.com/AbdulMuqsit09?t=WCtpYrTEXmgFZTzupoXn3A&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>X</p>
              </a>
            </div>

            <div className="contact-detail">
              <a
                href="https://www.instagram.com/abdulmuqsit_53492?utm_source=qr&igsh=emJjajd4M2s0dmJq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram_icon2} alt="Instagram" />
              </a>
              <a
                href="https://www.instagram.com/abdulmuqsit_53492?utm_source=qr&igsh=emJjajd4M2s0dmJq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Instagram</p>
              </a>
            </div>

            <div className="contact-detail">
              <a
                href="https://www.youtube.com/@techgamerz498"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube_icon2} alt="YouTube" />
              </a>
              <a
                href="https://www.youtube.com/@techgamerz498"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>YouTube</p>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label>Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
