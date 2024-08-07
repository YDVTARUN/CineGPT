import React from "react";

const VidTitlePre = ({ title, overview }) => {
  return (
    <div className=" w-sreen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview}</p>
      <div className="">
        <button className=" bg-white text-black p-4 px-12 text-xl rounded-md hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-slate-500 text-white p-4 px-12 text-xl rounded-md bg-opacity-50 ">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VidTitlePre;
