import React from "react";
import "./Home.css";
import NavBar from "./NavBar/NavBar";
import Slider from "./Slider/Slider";
import TopMovies from "./TopMovies/TopMovies";
import OurServices from "./OurServices/OurServices";
import TopSeries from "./TopSeries/TopSeries";
import TrailStart from "./TrailStart/TrailStart";
import FooterNavbar from "./FooterNavbar/FooterNavbar";

export default function Home() {
  return (
    <div className="home__container">
      <NavBar />
      <Slider />
      <TopMovies />
      <OurServices />
      <TopSeries />
      <TrailStart />
      <FooterNavbar />
    </div>
  );
}
