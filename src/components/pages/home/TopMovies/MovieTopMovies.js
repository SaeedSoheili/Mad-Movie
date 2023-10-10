import React from "react";
import "./MovieTopMovies.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";

export default function MovieTopMovies({ movieData }) {
  return (
    <div className="MovieTopMovies__container">
      <img
        className="MovieTopMovies__cover-image"
        src={
          movieData["#IMG_POSTER"]
            ? movieData["#IMG_POSTER"]
            : "./assets/blank-image-cover.png"
        }
      />
      <div className="MovieTopMovies__details">
        <div className="MovieTopMovies__details--first-row">
          <p className="MovieTopMovies__movie-name">{movieData["#TITLE"]}</p>
          <p className="MovieTopMovies__movie-year">{movieData["#YEAR"]}</p>
        </div>
        <div className="MovieTopMovies__details--second-row">
          <div className="MovieTopMovies__movie-quality">2K</div>
          <div className="MovieTopMovies__more-details">
            <AccessTimeIcon
              className="MovieTopMovies__time-icon"
              fontSize="small"
            />
            <p className="MovieTopMovies__time">122 min</p>
            <StarIcon
              className="MovieTopMovies__review-icon"
              fontSize="small"
            />
            <p className="MovieTopMovies__review-rate">9.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
