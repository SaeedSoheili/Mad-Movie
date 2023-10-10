import React from "react";
import "./FooterCopyright.css";

export default function FooterCopyright() {
  return (
    <div className="footercopyright__container">
      <div className="footercopyright__left">
        <p className="footercopyright__left-text">
          © 2023 <a href="#">MadMovie</a>. All Rights Reserved
        </p>
      </div>
      <div className="footercopyright__right">
        <img
          className="footercopyright__right--peyment-methods"
          src="./assets/payment-methods.png"
        />
      </div>
    </div>
  );
}
