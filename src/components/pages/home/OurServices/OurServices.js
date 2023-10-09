import React from "react";
import "./OurServices.css";
export default function OurServices() {
  return (
    <div className="ourservices__container">
      <div className="ourservices__left">
        <div className="ourservices__cover">
          <p className="ourservices__cover--price">Only $3.99</p>
          <p className="ourservices__cover--title">HD 4K</p>
          <p className="ourservices__cover--subtitle">Resolution!</p>
          <img
            className="ourservices__cover--image"
            src="./assets/4k-hd-logo.png"
          />
        </div>
      </div>
      <div className="ourservices__right">
        <div className="ourservices__right--1">
          <div className="ourservices__right--1-line"></div>
          <p className="ourservices__right--1-title">OUR SERVICES</p>
        </div>
        <div className="ourservices__right--2">
          <p className="ourservices__right--2-title">
            Download Your Shows Watch Offline.
          </p>
          <p className="ourservices__right--2-subtitle">
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>
        </div>
        <div className="ourservices__right--3">
          <div className="ourservices__right--3-item">
            <div className="ourservices__right--3-item--outer-div">
              <div className="ourservices__right--3-item--inner-div">
                <img
                  src="./assets/monitor.png"
                  className="ourservices__right--3-item--icon"
                />
              </div>
            </div>
            <div>
              <p className="ourservices__right--3-item--title">
                Enjoy on Your TV.
              </p>
              <p className="ourservices__right--3-item--subtitle">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="ourservices__right--3-divider"></div>
          <div className="ourservices__right--3-item">
            <div className="ourservices__right--3-item--outer-div">
              <div className="ourservices__right--3-item--inner-div">
                <img
                  src="./assets/videocam.png"
                  className="ourservices__right--3-item--icon"
                />
              </div>
            </div>
            <div>
              <p className="ourservices__right--3-item--title">
                Watch Everywhere.
              </p>
              <p className="ourservices__right--3-item--subtitle">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
