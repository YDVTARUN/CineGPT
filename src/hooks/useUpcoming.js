import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies, addTopRated, addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {
    const dispatch = useDispatch();
    //const movies = useSelector(store => store.movies.nowPlayingMovies);
      
  
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
       // console.log(json.results)
        dispatch(addUpcoming(json.results));
        
        
    }
    useEffect(()=>{
      getUpcomingMovies();
      
    },[])
}
export default useUpcoming;

