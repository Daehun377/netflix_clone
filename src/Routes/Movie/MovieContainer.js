import React, {useState, useEffect} from 'react';
import {movieApi} from "../../Api";
import MoviePresenter from "./MoviePresenter";

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
  <MoviePresenter
      {...movies} //이렇게 하면 저 위에 있는 키 값들을 다 받아올수 있다.
      // loading={movies.loading}
      // nowPlaying={movies.nowPlaying}
      // popular={movies.popular}
      // topRated={movies.topRated}
      // upComing={movies.upComing}
  />
 );
};

export default MovieContainer;