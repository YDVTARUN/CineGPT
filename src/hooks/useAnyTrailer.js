import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useAnyTrailer = (movie_id) => {
  const dispatch = useDispatch();
  
  const getAnyMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("any movie wala trailer niche");
   // console.log(json);

    if (json) {
      dispatch(addMovieTrailer(json));
    } else {
      console.error("No results found in the response.");
    }
  };

  useEffect(() => {
    getAnyMovieTrailer();
  }, [movie_id]);
};

export default useAnyTrailer;
