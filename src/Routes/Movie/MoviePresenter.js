import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, popular, topRated,upComing, error, loading}) => {
    return (
        <div>
            <h1>this is {nowPlaying.length}</h1>
        </div>
    );
};

MoviePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    popular : PropTypes.array,
    topRated : PropTypes.array,
    upComing : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
};

export default MoviePresenter;