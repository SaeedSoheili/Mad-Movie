import React from 'react'
import "./MovieTopMovies.css"
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from '@mui/icons-material/Star';


export default function MovieTopMovies() {
  return (
    <div className='MovieTopMovies__container'>
        <img className='MovieTopMovies__cover-image' src="https://codewithsadee.github.io/filmlane/assets/images/movie-1.png"/>
        <div className='MovieTopMovies__details'>
            <div className='MovieTopMovies__details--first-row'>
                <p className='MovieTopMovies__movie-name'>Sonic the Hedgehog 2</p>
                <p className='MovieTopMovies__movie-year'>2022</p>
            </div>
            <div className='MovieTopMovies__details--second-row'>
                <div className='MovieTopMovies__movie-quality'>2K</div>
                <div className='MovieTopMovies__more-details'>
                    <AccessTimeIcon className='MovieTopMovies__time-icon' fontSize="small"/>
                    <p className='MovieTopMovies__time'>122 min</p>
                    <StarIcon className='MovieTopMovies__review-icon' fontSize="small"/>
                    <p className='MovieTopMovies__review-rate'>7.8</p>
                </div>
            </div>
        </div>
    </div>
  )
}
