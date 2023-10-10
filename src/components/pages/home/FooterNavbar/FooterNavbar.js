import React from "react";
import "./FooterNavbar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterNavbar() {
  return (
    <div className="footernavbar__container">
      <div className="footernavbar__box-1">
        <div className="footernavbar__box-1--left">
          <figure>
            <img
              className="footernavbar__box-1--left--logo-image"
              src="/assets/mad-movie-logo.png"
            />
          </figure>
          <p className="footernavbar__box-1--left--logo-name">Mad Movie</p>
        </div>
        <div className="footernavbar__box-1--right">
          <ul className="footernavbar__box-1--right--menu">
            <li className="footernavbar__box-1--right--menu-items">HOME</li>
            <li className="footernavbar__box-1--right--menu-items">MOVIE</li>
            <li className="footernavbar__box-1--right--menu-items">PRICING</li>
            <li className="footernavbar__box-1--right--menu-items">
              CONTACT US
            </li>
          </ul>
        </div>
      </div>
      <div className="footernavbar__divider"></div>
      <div className="footernavbar__box-2">
        <div className="footernavbar__box-2--left">
          <ul className="footernavbar__box-2--left--menu">
            <li className="footernavbar__box-2--left--menu-items">FAQ</li>
            <li className="footernavbar__box-2--left--menu-items">
              HELP CENTER
            </li>
            <li className="footernavbar__box-2--left--menu-items">
              TERMS OF USE
            </li>
            <li className="footernavbar__box-2--left--menu-items">PRIVACY</li>
          </ul>
        </div>
        <div className="footernavbar__box-2--right">
          <FacebookIcon
            fontSize="large"
            className="footernavbar__box-2--right-logos"
          />
          <TwitterIcon
            fontSize="large"
            className="footernavbar__box-2--right-logos"
          />
          <PinterestIcon
            fontSize="large"
            className="footernavbar__box-2--right-logos"
          />
          <LinkedInIcon
            fontSize="large"
            className="footernavbar__box-2--right-logos"
          />
        </div>
      </div>
    </div>
  );
}
