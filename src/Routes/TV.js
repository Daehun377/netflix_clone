import React, {useEffect, useState} from 'react';
import {movieApi, tvApi} from "../Api";

const TV = () => {

    const [tvs, setTvs] = useState({
        results : [],
        error : null
    })

    const getData = async () => {
        const [results, error] = await tvApi.airingToday()
        setTvs({
            results,
            error
        })
        console.log(results)
    };


    useEffect(() => {

       getData()
    }, []);


    return (
        <div>
            <h1>tv is {tvs.results.length}</h1>
        </div>
    );
};

export default TV;