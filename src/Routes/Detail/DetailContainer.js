import React, {useEffect, useState} from 'react';
import { useParams , useLocation } from "react-router-dom";
import {movieApi, tvApi} from "../../Api"
import DetailPresenter from "./DetailPresenter";


const DetailContainer = ({pathname}) => {

    const {id} = useParams()

    const location = useLocation()

    const [ item, setItem ] = useState({
        result : {},
        resultError : null,
        loading : true
    })

    const getData = async () => {
        const [result, resultError] = location.pathname.includes("/movie/")
            ? await movieApi.detail(id)
            : await tvApi.detail(id)
        setItem({
            result,
            resultError,
            loading : false
        })
        console.log(result)
    };

    useEffect(() => {
        getData()
    },[id]) //어떤것을 잡을거냐라는 것 useEffect 공식문서 참조

    return (
        <DetailPresenter {...item}/>
    );
};

export default DetailContainer;