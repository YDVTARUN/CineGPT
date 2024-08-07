import React, { useRef } from "react";
import openai from "./openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const searchText = useRef(null); 
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        return json.results;
    }


    const handleGptSearchClick = async () => {
        console.log(searchText.current.value)
        //Make api call to gpt api and get movie recommendation

        const gptQuery = "Act as a Movie Recommendation System ans suggest some movies for the query " + searchText.current.value + ". only give me names of 5 movies , comma separated like the example result given ahead. Example result: gadar,Sholay,Don,golmaal,Koi Mil Gya";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
         // console.log(gptResults.choices?.[0]?.message.content )

          const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

          const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);

          // for each movie search tmdb api
          dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
          );
          
           
    }
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black rounded-lg grid grid-cols-12" onSubmit={(e)=> {e.preventDefault()}}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder="What would u like to watch today?"
        ></input>
        <button  className="py-2 px-4 m-4 col-span-3 bg-red-600 text-white rounded-lg" onClick={()=>{console.log("clicked")}}>
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar; 
