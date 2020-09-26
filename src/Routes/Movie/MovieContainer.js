import React, {useState, useEffect} from 'react';
import {movieApi} from "../../Api";
import MoviePresenter from "./MoviePresenter";
import axios from "axios";

const MovieContainer = () => {

 const [movies, setMovies] = useState({ //1번
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

    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying() //상수 선언
     // console.log("nowPlaying is ", nowPlayingError)
    const [popular, popularError] = await movieApi.popular() //결국 앞서 Api.js에 정의 해줬던 것처럼 성공/실패로 구분.
    const [topRated, topRatedError] = await movieApi.topRated()
    const [upComing, upComingError] = await movieApi.upComing()
     setMovies({ //3번
         nowPlaying: nowPlaying, //이름이 같으니까 nowPlaying하나만으로 가능, 원래는 nowPlaying : nowPlaying. 만약 Api.js에서 data = {results} 안해줄 경우는 여기다가 nowPlaying: nowPlaying.results로 해주면된다.
         popular : popular,
         topRated : topRated,
         upComing : upComing,
         nowPlayingError : nowPlayingError,
         popularError : popularError,
         topRatedError : topRatedError,
         upComingError : upComingError,
         loading : false
     })
 };

 useEffect(() => { //이건 무조건 실행되는 함수. 2번
     getData() //네트워킹을 태운것 useState(초기값설정) -> useEffect가 실행이 되면서 네트워킹을 태우면서 -> setMovies로 데이터들이 초기값을 바꾼다.
 }, []);


    //movies.nowPlaying으로 하면 React.child가 Object라서 안된다고 나옴
 return (
     // <div>
     //     {movies.nowPlaying.length}
     // </div>

  <MoviePresenter

  //     {...movies} //이렇게 하면 저 위에 있는 키 값들을 다 받아올수 있다.
  //     // loading={movies.loading}
      nowPlaying={movies.nowPlaying}
  //     // popular={movies.popular}
  //     // topRated={movies.topRated}
  //     // upComing={movies.upComing}
  />
 );
};

export default MovieContainer;