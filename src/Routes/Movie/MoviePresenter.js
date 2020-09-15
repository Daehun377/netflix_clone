import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "../../Components/Section";



const Container = styled.div`
  padding : 0px 15px; 
`;

const MoviePresenter = ({nowPlaying, popular, topRated,upComing, error, loading}) => {
    return (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title={"NowPlaying"}>
                    {nowPlaying.map(movie => (
                        <h1>{movie.title}</h1>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title={"Popular"}>
                    {popular.map(movie => (
                        <h1>{movie.popularity}</h1>
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title={"Top Rated"}>
                    {topRated.map(movie => (
                        <h1>{movie.vote_count}</h1>
                    ))}
                </Section>
            )}
            {upComing && upComing.length > 0 && (
                <Section title={"Upcoming"}>
                    {upComing.map(movie => (
                        <h1>{movie.title}</h1>
                    ))}
                </Section>
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