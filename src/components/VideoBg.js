import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useTrailerVIdeo from "../hooks/useTrailerVIdeo";

const VideoBg = ({ movie_id }) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  
  useTrailerVIdeo(movie_id);
  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video"
        // height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        //frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerpolicy="strict-origin-when-cross-origin"
        //allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;


// import React from "react";
// import { useSelector } from "react-redux";
// import useTrailerVIdeo from "../hooks/useTrailerVIdeo";

// const VideoBg = ({ movie_id }) => {
//   useTrailerVIdeo(movie_id);

//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   return (
//     <div>
//       {trailerVideo ? (
//         <iframe
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${trailerVideo.key}`}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         ></iframe>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default VideoBg;
