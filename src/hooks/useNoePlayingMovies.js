import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    //const movies = useSelector(store => store.movies.nowPlayingMovies);
      
  
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        //console.log("popular movies niche")
        //console.log(json.results)
        dispatch(addNowPlayingMovies(json.results));
        
        
    }
    useEffect(()=>{
      getNowPlayingMovies();
      
    },[])
}
export default useNowPlayingMovies;