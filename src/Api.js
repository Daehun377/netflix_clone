import axios from "axios";

const TMDB_KEY = "8a47fa65fd10d7ea60ede710911c6bcc";

const makeRequest = (path, params) => //기본 접속 경로에 대한 설정 axios를 쓰게 되면 json처리를 알아서 axios가 해주기에 편하다.
    axios.get(`https://api.themoviedb.org/3/${path}`, { //이건 path 경로의 params를 넣는것이다. path로 명시해주고 ${path}로 받는다.
     params:{
         ...params, // query : query 이런식으로 받아오게 된다. https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
         api_key: TMDB_KEY //문서에 보면 이것이 required(필수)로 나와있으니까 무조건적으로 넣어줘야함.
     }
    })

const getAntyhing = async (path, params = {}) => {  //초기값(default)을 {}로 지정해준다. 한번에 여러 데이터를 처리해줄때 async await를 써준다 생각하면 된다.

    try{   //try catch를 쓰면 [성공, 실패] 성공할 경우는 데이터를, 실패할 경우는 에러를 반환해준다라고 생각하면 된다.
        const {
            data : {results}, // 이건 result (makeRequest.data.result) 이걸 매번 하기 힘들고 하니까 표준화 시킨것임.
            data   // 전체를 쓰겠다 (get detail의 경우는 배열로 들어오게 되니까 makeRequest.data가 배열을 뽑아내는것)
        } = await makeRequest(path, params)
        // console.log("+++++++++++++++++++++++++++++", [results || data, null])
        return [results || data, null] //기본적으로 이런식으로 생겼다. 앞에가 결과값, 뒤에가 에러값. 배열 형식은 뒤에 에러를 지정해주기 위해서 , 를 정의하기 위해서 써준것.
    }
    catch(err){
        // console.log("++++++++++++++++++++",[null, err])
        return [null, err]
    }
}


export const movieApi = {
    nowPlaying : () => getAntyhing("movie/now_playing", {}), //params 붙일게 없으니까 안해줘도 된다. 위에 디폴트값으로 {}으로 위에 설정해 놓았으니 없어도 동작할거임.
    popular : () => getAntyhing("movie/popular"),
    topRated : () => getAntyhing("movie/top_rated"),
    upComing : () => getAntyhing("movie/upcoming"),
    detail : (id) => getAntyhing(`movie/${id}`), //선택된 movie_id를 path에 명시되어있는 path params로 만들어준것.
    search : (query) => getAntyhing("search/movie", {query}), //params는 일반적으로 객체모양이다. 키:값 query로만 해주는건 축약형으로 쓸수 있는것. 만약 ()에 keyword를 담게 되면 query : keyword로 해줘야 할것
    similar : (movie_id) => getAntyhing(`movie/${movie_id}/similar`)
};

export const tvApi = {
    airingToday : () => getAntyhing("tv/airing_today"),
    onAir : () => getAntyhing("tv/on_the_air"),
    popular : () => getAntyhing("tv/popular"),
    topRated : () => getAntyhing("tv/top_rated"),
    detail : (tv_id) => getAntyhing(`tv/${tv_id}`),
    search : (query) => getAntyhing("search/tv", {query}),
    similar : (tv_id) => getAntyhing(`tv/${tv_id}/similar`)
};