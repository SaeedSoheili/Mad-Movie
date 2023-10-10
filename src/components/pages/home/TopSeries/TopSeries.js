import React, { useEffect, useState } from "react";
import "./TopSeries.css";
import SerieTopSeries from "./SerieTopSeries";
import { getMoviesDataFromApi } from "../getRandomMovies";

export default function TopSeries() {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopMovies() {
      const moviesDetails = await getMoviesDataFromApi();
      const topMoviesData = moviesDetails.slice(7, 10);
      setTopMovies(topMoviesData);
      setIsLoading(false);
    }

    fetchTopMovies();
  }, []);

  return (
    <div className="topseries__container">
      <p className="topseries__subtitle">BEST TV SERIES</p>
      <h2 className="topseries__title">World Best TV Series</h2>

      {isLoading ? (
        <div className="topseries__loading-spinner-div">
          <div className="topseries__loading-spinner"></div>
        </div>
      ) : (
        <div className="topseries__movies-list--box">
          {topMovies.map((movie, index) => (
            <SerieTopSeries key={index} movieData={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
