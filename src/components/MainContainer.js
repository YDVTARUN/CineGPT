import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  

  const mainMovies = movies[0];

  const {original_title,overview,id} = mainMovies;
  //console.log(mainMovies);
  
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
    
      <VideoBg movie_id={id} />
    </div>
  );
};

export default MainContainer;
