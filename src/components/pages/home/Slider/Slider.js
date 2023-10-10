import React from "react";
import "./Slider.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import sliderData from "../getRandomSlider";

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 0 and 3
  return randomNumber;
}

let randomNumberCrated = generateRandomNumber();

export default function Slider() {
  return (
    <div className="slider__container">
      <img
        className="slider__image-cover"
        style={{
          backgroundImage: `url('${sliderData[randomNumberCrated].cover}')`,
        }}
      />
      <div className="slider__divider"></div>
      <div className="slider__divider"></div>
      <div className="slider__divider"></div>
      <video
        className="slider__trailer"
        autoPlay
        muted
        loop
        id="background-video"
      >
        <source src={sliderData[randomNumberCrated].trailer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="slider__contents">
        <h2 className="slider__movie-name">
          {sliderData[randomNumberCrated].title}
        </h2>
        <h1 className="slider__title">
          Unlimited <span className="slider__title--highlight">Movie</span>, TVs
          Shows, & More.
        </h1>
        <div className="slider__details">
          <div className="slider__details--box1">
            <div className="slider__box1--age">
              {sliderData[randomNumberCrated].age}
            </div>
            <div className="slider__box1--quality">HD</div>
          </div>
          <div className="slider__details--box2">
            <p className="slider__box2--category">
              {sliderData[randomNumberCrated].category}
            </p>
          </div>
          <div className="slider__details--box3">
            <CalendarMonthIcon
              fontSize="small"
              className="slider__box3--calender-img"
            />
            <p className="slider__box3--release-year">
              {sliderData[randomNumberCrated].year}
            </p>
            <AccessTimeIcon
              fontSize="small"
              className="slider__box3--clock-img"
            />
            <p className="slider__box3--movie-length">
              {sliderData[randomNumberCrated].time}
            </p>
          </div>
        </div>
        <button className="slider__button">
          <PlayCircleIcon className="slider__button--icon" /> WATCH NOW
        </button>
      </div>
    </div>
  );
}
