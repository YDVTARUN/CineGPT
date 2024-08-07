import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Preview from "./Preview";
import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ movie_id, poster_path }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    <Preview movie_id={movie_id} />;
    navigate(`/selmov/${movie_id}`);
  };
  return (
    <div className="w-48">
      <img
        alt="movie photo"
        className="cursor-pointer"
        onClick={clickHandler}
        src={IMG_CDN_URL + poster_path}
      />
    </div>
  );
};

export default MovieCard;
