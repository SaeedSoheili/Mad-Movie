import React from "react";
import "./TrailStart.css";

export default function TrailStart() {
  return (
    <div className="trailstart__container">
      <div className="trailstart__container--left">
        <p className="trailstart__container--left-title">
          TRIAL START FIRST 30 DAYS.
        </p>
        <p className="trailstart__container--left-subtitle">
          Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="trailstart__container--right">
        <div className="trailstart__container--right-div">
          <input
            className="trailstart__container--right-input"
            placeholder="Enter your email"
          />
          <button className="trailstart__container--right-button">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
