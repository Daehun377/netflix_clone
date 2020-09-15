import axios from "axios";

const TMDB_KEY = "8a47fa65fd10d7ea60ede710911c6bcc";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3/${path}`, {
     params:{
         ...params,
         api_key: TMDB_KEY //문서에 보면 이것이 required(필수)로 나와있으니까 무조건적으로 넣어줘야함.
     }
    })

const getAntyhing = async (path, params = {}) => {
    try{
        const {
            data : {results},
            data
        } = await makeRequest(path, params)
        return [results || data, null] //기본적으로 이런식으로 생겼다. 앞에가 결과값, 뒤에가 에러값.
    }
    catch(err){
        console.log(err)
        return [null, err]
    }
}


const movieApi = {
    nowPlaying : () => getAntyhing("movie/now_playing"),
    popular : () => getAntyhing("movie/popular"),
    topRated : () => getAntyhing("movie/top_rated"),
    upComing : () => getAntyhing("movie/upcoming"),
    detail : (movie_id) => getAntyhing(`movie/${movie_id}`),
    search : (query) => getAntyhing("search/movie", {query})
};

const tvApi = {
    airingToday : () => getAntyhing("tv/airing_today"),
    onAir : () => getAntyhing("tv/on_the_air"),
    popular : () => getAntyhing("tv/popular"),
    topRated : () => getAntyhing("tv/top_rated"),
    detail : (tv_id) => getAntyhing(`tv/${tv_id}`),
    search : (query) => getAntyhing("search/tv", {query}) //query : params 키와 값이 
};