import React, { useEffect, useState } from "react";
import "./TopMovies.css";
import CategoryButtons from "./CategoryButtons";
import MovieTopMovies from "./MovieTopMovies";
import { getMoviesDataFromApi } from "../getRandomMovies";

export default function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopMovies() {
      const moviesDetails = await getMoviesDataFromApi();
      const topMoviesData = moviesDetails.slice(1, 7);
      setTopMovies(topMoviesData);
      setIsLoading(false);
    }

    fetchTopMovies();
  }, []);

  return (
    <div className="topmovies__container">
      <p className="topmovies__subtitle">ONLINE STREAMING</p>
      <h2 className="topmovies__title">Top Rated Movies</h2>
      <div className="topmovies__categories">
        <CategoryButtons categoryName="MOVIES" />
        <CategoryButtons categoryName="SPORTS" />
        <CategoryButtons categoryName="DOCUMENTARY" />
        <CategoryButtons categoryName="TV SHOWS" />
      </div>
      {isLoading ? (
        <div className="topmovies__loading-spinner-div">
          <div className="topmovies__loading-spinner"></div>
        </div>
      ) : (
        <div className="topmovies__movies-list--box">
          {topMovies.map((movie, index) => (
            <MovieTopMovies key={index} movieData={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
