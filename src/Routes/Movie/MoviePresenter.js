import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";



const Container = styled.div`
  padding : 0px 15px; 
`;

const MoviePresenter = ({nowPlaying, popular, topRated,upComing, error, loading}) => {
    return (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <div>
                    {nowPlaying.map(movie => (
                        <h1>{movie.title}</h1>
                    ))}
                </div>
            )}
            {popular && popular.length > 0 && (
                <div>
                    {popular.map(movie => (
                        <h1>{movie.popularity}</h1>
                    ))}
                </div>
            )}
            {topRated && topRated.length > 0 && (
                <div>
                    {topRated.map(movie => (
                        <h1>{movie.vote_count}</h1>
                    ))}
                </div>
            )}
            {upComing && upComing.length > 0 && (
                <div>
                    {upComing.map(movie => (
                        <h1>{movie.video}</h1>
                    ))}
                </div>
            )}
        </Container>
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