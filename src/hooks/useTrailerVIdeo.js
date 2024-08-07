import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVIdeo = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US",
        API_OPTIONS
    );
    const json = await data.json();
   // console.log(json);

    if (json.results) {
        const filData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filData.length ? filData[0] : json.results[0];
        //console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error("No results found in the response.");
      }
    
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVIdeo;

// import React, { useEffect, useState } from "react";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addTrailerVideo } from "../utils/movieSlice";

// const useTrailerVIdeo = (movie_id) => {
//   const dispatch = useDispatch();

//   const getMovieVideos = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
//         API_OPTIONS
//       );
//       const json = await response.json();
//       console.log(json);

//       if (json.results) {
//         const filData = json.results.filter((video) => video.type === "Trailer");
//         const trailer = filData.length ? filData[0] : json.results[0];
//         console.log(trailer);
//         dispatch(addTrailerVideo(trailer));
//       } else {
//         console.error("No results found in the response.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch movie videos:", error);
//     }
//   };

//   useEffect(() => {
//     if (movie_id) {
//       getMovieVideos();
//     }
//   }, [movie_id]);
// };

// export default useTrailerVIdeo;
