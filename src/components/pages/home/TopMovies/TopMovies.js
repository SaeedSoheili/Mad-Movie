import React from 'react'
import "./TopMovies.css"
import CategoryButtons from './CategoryButtons'
import MovieTopMovies from './MovieTopMovies'

export default function TopMovies() {
  return (
    <div className='topmovies__container'>
        <p className='topmovies__subtitle'>ONLINE STREAMING</p>
        <h2 className='topmovies__title'>Top Rated Movies</h2>
        <div className='topmovies__categories'>
            <CategoryButtons categoryName="MOVIES"/>
            <CategoryButtons categoryName="SPORTS"/>
            <CategoryButtons categoryName="DOCUMNETRY"/>
            <CategoryButtons categoryName="TV SHOWS"/>
        </div>
        <div className='topmovies__movies-list--box'>
          <MovieTopMovies/>
          <MovieTopMovies/>
          <MovieTopMovies/>
          <MovieTopMovies/>
          <MovieTopMovies/>
          <MovieTopMovies/>

        </div>
    </div>
  )
}
