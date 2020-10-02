import React,{useState} from 'react';
import {movieApi, tvApi} from "../../Api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {


    const [keyword, setKeyword] =useState("");

    const [results, setResults] = useState({
        movies : [],
        shows : [],
        movieError : null,
        showError : null,
        loading : false
    })

    const onChange = (e) => {
        e.preventDefault() //form을 할때는 필수적으로 해야하는것
        setKeyword(e.target.value)
        console.log(e.target.value)
    }


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

        console.log(shows)
    }


    return (
        <SearchPresenter
            {...results}
            onChange={onChange}
            onSubmit={onSearch}
        />
    );
};

export default SearchContainer;