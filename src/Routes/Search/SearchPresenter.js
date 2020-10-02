import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";


const Container = styled.div`
  padding : 0 20px;
`;

const Form = styled.form`
  margin-bottom: 60px;
  width: 100%;
`;

const Input = styled.input`
  all : unset; //스타일링 안입히는것 
  font-size: 30px;
  width: 100%;
`;

const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit, loading, error}) => {
    return (
        loading ?
            <Loader/>
            :
            (
        <Container>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder={"search Movies & Tv Shows"}
                    value={keyword}
                    onChange={onChange}
                />
            </Form>
            {movies && movies.length > 0 && (
                <Section title={"Movie Results"}>
                   {movies.map(movie => (
                       <Poster
                           key={movie.id} //map 할때 필수
                           id={movie.id}
                           title={movie.title}
                           imgUrl={movie.poster_path}
                           rating={movie.vote_average}
                           releaseDate={movie.releaseDate}
                       />
                   ))}
                </Section>
            )}
            {shows && shows.length > 0 && (
                <Section title={"Show Results"}>
                    {shows.map(show => (
                        <Poster
                            key={show.id} //map 할때 필수
                            id={show.id}
                            title={show.name}
                            imgUrl={show.poster_path}
                            rating={show.vote_average}
                            releaseDate={show.releaseDate}
                        />
                    ))}
                </Section>
            )}
        </Container>
            )
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