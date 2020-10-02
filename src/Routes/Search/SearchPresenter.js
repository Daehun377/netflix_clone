import React from 'react';
import PropTypes from 'prop-types';

const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit, loading, error}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder={"search Movies & Tv Shows"}
                    value={keyword}
                    onChange={onChange}
                />
            </form>
        </div>
    );
};

SearchPresenter.propTypes = {
    movies : PropTypes.array,
    shows : PropTypes.array,
    keyword : PropTypes.string,
    onChange : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default SearchPresenter;