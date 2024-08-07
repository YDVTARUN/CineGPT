import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNoePlayingMovies';
import MainContainer from './MainContainer';
import SecContainer from './SecContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useAnyTrailer from '../hooks/useAnyTrailer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  
  const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

  

  return (
    <div>
      <Header/>
      {showGptSearch &&  <GptSearch/>}

      {!showGptSearch &&  <MainContainer/>}
      {!showGptSearch && <SecContainer/>}
    </div>
  )
}

export default Browse