// import React, { useEffect, useState } from 'react';
// import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';

// const VidbgPre = ({ movie_id }) => {
//   const [imagePath, setImagePath] = useState(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${movie_id}/images`, 
//           API_OPTIONS
//         );
//         const json = await response.json();
//         const backdropPath = json?.backdrops[0]?.file_path;
//         setImagePath(backdropPath);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, [movie_id]);

//   if (!imagePath) return <div>Loading...</div>;

//   return (
//     <div className='w-full h-screen overflow-y-hidden'>
//       <img 
//         className='w-full h-full object-cover' 
//         src={IMG_CDN_URL + imagePath} 
//         alt='background' 
//       />
//     </div>
//   );
// };

// export default VidbgPre;
import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VidbgPre = ({ movie_id }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, 
          API_OPTIONS
        );
        const json = await response.json();
        const trailer = json.results.find(video => video.type === 'Trailer');
        setTrailerKey(trailer?.key);
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [movie_id]);

  if (!trailerKey) return <div>Loading...</div>;

  return (
    <div className=' realative -z-30 w-full h-screen overflow-y-hidden'>
      <iframe
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VidbgPre;

