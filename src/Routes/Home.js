import React, {useEffect, useState} from 'react'; //useState : 초기 상태값 지정, 업데이트에 대한것 , useEffect : 라이프사이클의 역할의 훅
import {movieApi} from "../Api";



const Home = () => {

    const [movies, setMovies] = useState({
        results : [],
        error : null
    })

    const getData = async() => {
        const [results, error]  = await movieApi.nowPlaying()
        setMovies({
            results, //변수화 시킨것을 results: results 면 못잡는다. results로 통일
            error
        })
        console.log(results)
    };

    useEffect(() => {

        getData()
    }, [])

    return (
        <div>
           <h1>movie is {movies.results.length}</h1>
        </div>
    );
};

export default Home;