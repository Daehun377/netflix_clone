import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";



const Container = styled.div`
  padding : 0px 15px; 
`;

const MoviePresenter = ({
    nowPlaying,
    popular,
    topRated,
    upComing,
    error,
    loading
}) => {
    return (
        loading
            ? <Loader/>
            :  <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title={"NowPlaying"}>
                        {nowPlaying.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                imgUrl={movie.poster_path}
                                rating={movie.vote_average}
                                releaseDate={movie.release_date}
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"Popular"}>
                        {popular.map(movie => (
                            <h1 key={movie.id}>{movie.popularity}</h1>
                        ))}
                    </Section>
                )}
                {topRated && topRated.length > 0 && (
                    <Section title={"Top Rated"}>
                        {topRated.map(movie => (
                            <h1 key={movie.id}>{movie.vote_count}</h1>
                        ))}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title={"Upcoming"}>
                        {upComing.map(movie => (
                            <h1 key={movie.id}>{movie.title}</h1>
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