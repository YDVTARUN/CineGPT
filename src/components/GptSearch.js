import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggest from './GptMovieSuggest'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className=" absolute -z-20">
        <img
          
          alt=""
          src={BG_URL}                />
      </div>
        <GptSearchBar/>
        <GptMovieSuggest/>
    </div>
  )
}

export default GptSearch