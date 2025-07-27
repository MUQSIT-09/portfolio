import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg"; // Not directly used, but keep if needed
import muqsitlogo from "../../assets/image (4).png"; // <-- This is the image we're making clickable
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closedMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      {/* THIS IS THE CLICKABLE MUQSITLOGO IMAGE SECTION */}
      <a
        href="/" // Fallback URL for navigation
        onClick={(e) => {
          console.log("Navbar logo clicked! Reloading page..."); // For debugging
          e.preventDefault(); // Prevents default anchor link behavior (navigating to "/")
          window.location.reload(); // Reloads the current page
        }}
        className="navbar-logo-link" // Optional: for specific CSS styling
      >
        <img src={muqsitlogo} alt="Website Logo - Click to Reload" />
      </a>
      {/* END CLICKABLE MUQSITLOGO IMAGE SECTION */}

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closedMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu == "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu == "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=="services"?<img src={underline} alt=''/>:<></>}</li> */}
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Projects</p>
          </AnchorLink>
          {menu == "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu == "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
