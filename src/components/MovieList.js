import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    //console.log("niche wala dekh")
    //console.log(movies)
  return (
    <div className='px-6 '>
        <h1 className='text-3xl text-white py-6'>{title}</h1>
        <div className='flex  overflow-x-scroll'>

            <div className='flex gap-4'>
            {
                movies.map( (movie) => (
                    <MovieCard   movie_id={movie.id} poster_path={movie.poster_path}/> 
                    
                ))
            }
            
            </div>
        </div>
        
    </div>
  )
}

export default MovieList
//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg