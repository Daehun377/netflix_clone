import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";



const Container = styled.div`
  padding : 0px 15px; 
`;

// const MoviePresenter = props(상수화를 시킨것 뿐) props.nowPlaying =>  => {
//     return (
//         <div>
//             <h1>{props.nowPlaying.length}</h1>
//         </div>
//     )
// }

const MoviePresenter = ({
    nowPlaying,  //직접 불러오는법
    popular,
    topRated,
    upComing,
    error, //그냥 에러라고 명시해준거임. 여기서도 nowPlayingError 등이 들어가야함. 그러기에 이것은 동작하지 않음 현재로선.
    loading
}) => {
    return (
        loading
            ? <Loader/>
            :  (
                <Container>
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
                    // {topRated && topRated.length > 0 && (
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
            )
    );
};

MoviePresenter.propTypes = { //이걸 안해줘도 되는데, 해주는게 좋다.
    nowPlaying : PropTypes.array,
    popular : PropTypes.array,
    topRated : PropTypes.array,
    upComing : PropTypes.array,
    error : PropTypes.string, //원래대로라면 nowPlayingError : PropTypes.string 이런식으로 해야되는데, 에러 핸들링은 나중에 할거라서 일단 명시만.
    loading : PropTypes.bool.isRequired
};

export default MoviePresenter;