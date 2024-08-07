// import React from 'react'
// import MovieList from './MovieList'
// import { useSelector } from 'react-redux'

// const SecContainer = () => {
//   const movies = useSelector(store => store.movies);
//   return (
//     <div>
//       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
//     </div>
//   )
// }

// export default SecContainer
import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='  bg-black'>
    <div className='-mt-20 relative z-20'>
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies || []}/>
      <MovieList title={"Top Rated"} movies={movies?.topRated || []}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies || []}/>
      <MovieList title={"Upcoming"} movies={movies?.upcoming || []}/> 
    </div>
     

    </div>
  );
};

export default SecContainer;
