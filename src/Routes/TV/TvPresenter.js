import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({airingToday, onAir, popular, loading, topRated}) => {
    return (
        <div>
            <h1>Today we have {airingToday.length} airs</h1>
        </div>
    );
};

TvPresenter.propTypes = {
    airingToday : PropTypes.array,
    onAir : PropTypes.array,
    popular : PropTypes.array,
    topRated : PropTypes.array,
    loading : PropTypes.bool
};

export default TvPresenter;