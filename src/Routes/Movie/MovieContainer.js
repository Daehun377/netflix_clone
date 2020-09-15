import React, {useState, useEffect} from 'react';
import {movieApi} from "../../Api";

const MovieContainer = () => {

 const [movies, setMovies] = useState({
     nowPlaying: [],
     popular : [],
     topRated : [],
     upComing : [],
     nowPlayingError : null,
     popularError : null,
     topRatedError : null,
     upComingError : null,
     loading : true
 });

 const getData = async() => {

    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying()
    const [popular, popularError] = await movieApi.popular()
    const [topRated, topRatedError] = await movieApi.topRated()
    const [upComing, upComingError] = await movieApi.upComing()
     setMovies({
         nowPlaying,
         popular,
         topRated,
         upComing,
         nowPlayingError,
         popularError,
         topRatedError,
         upComingError,
         loading : false
     })
 };

 useEffect(() => {
     getData()
 }, []);

 return (
  <div>
      <h1>{movies.nowPlaying.length}</h1>
  </div>
 );
};

export default MovieContainer;