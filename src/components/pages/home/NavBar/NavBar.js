import React, { useState, useEffect } from "react";

import "./NavBar.css";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle scrolling and update the sticky state
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar__container ${isSticky ? "sticky" : ""}`}>
      <div className="navbar__container--box">
        <figure>
          <img
            className="navbar__container--logo-image"
            src="/assets/mad-movie-logo.png"
          />
        </figure>
        <p className="navbar__container--logo-name">Mad Movie</p>
      </div>
      <div className="navbar__container--box">
        <ul className="navbar__container--menu">
          <li className="navbar__container--menu-items">HOME</li>
          <li className="navbar__container--menu-items">MOVIE</li>
          <li className="navbar__container--menu-items">PRICING</li>
          <li className="navbar__container--menu-items">CONTACT US</li>
        </ul>
      </div>
      <div className="navbar__container--box">
        <figure>
          <img
            className="navbar__container--search-btn"
            src="/assets/search.png"
          />
        </figure>
        <div className="navbar__container--divider-line"></div>
        <div className="navbar__container--language">
          <figure>
            <img
              className="navbar__container--language-icon"
              src="/assets/language.png"
            />
          </figure>
          <select className="navbar__container--language-list">
            <option value="en">EN</option>
            <option value="fa">FA</option>
            <option value="du">DU</option>
          </select>
        </div>
        <button className="navbar__container--login-btn">SIGN IN</button>
      </div>
    </div>
  );
}
