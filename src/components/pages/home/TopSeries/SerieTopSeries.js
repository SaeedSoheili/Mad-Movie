import React from "react";
import "./SerieTopSeries.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";

export default function SerieTopSeries({ movieData }) {
  return (
    <div className="SerieTopSeries__container">
      <img
        className="SerieTopSeries__cover-image"
        src={
          movieData["#IMG_POSTER"]
            ? movieData["#IMG_POSTER"]
            : "./assets/blank-image-cover.png"
        }
      />
      <div className="SerieTopSeries__details">
        <div className="SerieTopSeries__details--first-row">
          <p className="SerieTopSeries__movie-name">{movieData["#TITLE"]}</p>
          <p className="SerieTopSeries__movie-year">{movieData["#YEAR"]}</p>
        </div>
        <div className="SerieTopSeries__details--second-row">
          <div className="SerieTopSeries__movie-quality">2K</div>
          <div className="SerieTopSeries__more-details">
            <AccessTimeIcon
              className="SerieTopSeries__time-icon"
              fontSize="small"
            />
            <p className="SerieTopSeries__time">122 min</p>
            <StarIcon
              className="SerieTopSeries__review-icon"
              fontSize="small"
            />
            <p className="SerieTopSeries__review-rate">7.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
