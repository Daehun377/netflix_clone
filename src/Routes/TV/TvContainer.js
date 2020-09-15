import React, {useState, useEffect} from 'react';
import {tvApi} from "../../Api";

const TvContainer = () => {

 const [tvs, setTvs] = useState({
     airingToday :[],
     onAir : [],
     popular : [],
     topRated : [],
     airingTodayError : null,
     onAirError : null,
     popularError : null,
     topRatedError : null, //에러는 스트링으로 담길거기에 null로 초기값 비워준다.
     loading : true
 });

 const getData = async() => {

     const [airingToday,airingTodayError ] = await tvApi.airingToday()
     const [onAir, onAirError] = await tvApi.onAir()
     const [popular, popularError] = await tvApi.popular()
     const [topRated, topRatedError] = await tvApi.topRated()
        setTvs({
            airingToday,
            onAir,
            popular,
            topRated,
            airingTodayError, //airingTodayError : airingTodayError
            onAirError,
            popularError,
            topRatedError,
            loading : false
        })

 };

 useEffect(() => {
     getData()
 })

 return (
  <div>
    <h1>{tvs.airingToday.length}</h1>
  </div>
 );
};

export default TvContainer;