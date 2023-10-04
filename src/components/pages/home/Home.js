import React from "react";
import "./Home.css";
import NavBar from "./NavBar/NavBar";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div className="home__container">
      <NavBar />
      <Slider />
    </div>
  );
}
