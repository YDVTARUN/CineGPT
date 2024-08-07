import React from 'react';
import VidTitlePre from './VidTitlePre';
import VidbgPre from './VidbgPre';
import useAnyTrailer from '../hooks/useAnyTrailer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Preview = () => {
  const { movie_id } = useParams();
  useAnyTrailer(movie_id);
  const moviesAny = useSelector((store) => store.movies?.anyMovieTrailer);

  if (!moviesAny) return null;

  const { original_title, overview , poster_path } = moviesAny;

  return (
    <div>
      <VidTitlePre title={original_title} overview={overview} />
      <VidbgPre movie_id={movie_id} />
    </div>
  );
};

export default Preview;
