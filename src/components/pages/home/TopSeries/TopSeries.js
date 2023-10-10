import React from "react";
import "./TopSeries.css";
import SerieTopSeries from "./SerieTopSeries";

export default function TopSeries() {
  return (
    <div className="topseries__container">
      <p className="topseries__subtitle">BEST TV SERIES</p>
      <h2 className="topseries__title">World Best TV Series</h2>
      <div className="topseries__movies-list--box">
        <SerieTopSeries />
        <SerieTopSeries />
        <SerieTopSeries />
      </div>
    </div>
  );
}
