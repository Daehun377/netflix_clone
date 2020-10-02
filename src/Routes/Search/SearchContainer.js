import React,{useState} from 'react';
import {movieApi, tvApi} from "../../Api";

const SearchContainer = () => {

    const [keyword, setKeyword] =useState("");

    const [results, setResults] = useState({
        movies : [],
        shows : [],
        movieError : null,
        showError : null,
        loading : false
    })


    //네트워킹 태우기
    const onSearch = async() => {
        if (keyword === ""){
            return
        }
        setResults({
            loading : true
        })
        const [movies, movieError] =  await movieApi.search(keyword) //이 키워드로 필터링을 해주는 API
        const [shows, showError] = await tvApi.search(keyword)
        setResults({
            movies,  //movies,movies
            shows,
            movieError,
            showError,
            loading: false
        })
    }


    return (
        <div>
            <h1>SearchContainer</h1>
        </div>
    );
};

export default SearchContainer;