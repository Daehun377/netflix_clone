import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import styled from "styled-components";


const Container = styled.div`
  padding : 0px 15px; 
`;


const TvPresenter = ({airingToday, onAir, popular, loading, topRated}) => {
    return (
       loading
        ?(<Loader />)
           :(
               <Container>
                   {airingToday && airingToday.length > 0 && (
                      <Section title={"AiringToday"}>
                          {airingToday.map(tv => (
                              <Poster
                                  key={tv.id} //html은 붙여준다 띄워주지 않고
                                  id={tv.id}
                                  title={tv.name}
                                  imgUrl={tv.poster_path}
                                  rating={tv.vote_average}
                                  releaseDate={tv.first_air_date}
                              />
                          ))}
                      </Section>
                   )}
                   {onAir && onAir.length > 0 && (
                       <Section title={"onAir"}>
                           {onAir.map(tv => (
                               <Poster
                                   key={tv.id} //html은 붙여준다 띄워주지 않고
                                   id={tv.id}
                                   title={tv.name}
                                   imgUrl={tv.poster_path}
                                   rating={tv.vote_average}
                                   releaseDate={tv.first_air_date}
                               />
                           ))}
                       </Section>
                   )}
                   {popular && popular.length > 0 && (
                       <Section title={"Popular"}>
                           {popular.map(tv => (
                               <Poster
                                   key={tv.id} //html은 붙여준다 띄워주지 않고
                                   id={tv.id}
                                   title={tv.name}
                                   imgUrl={tv.poster_path}
                                   rating={tv.vote_average}
                                   releaseDate={tv.first_air_date}
                               />
                           ))}
                       </Section>
                   )}
                   {topRated && topRated.length > 0 && (
                       <Section title={"TopRated"}>
                           {topRated.map(tv => (
                               <Poster
                                   key={tv.id} //html은 붙여준다 띄워주지 않고
                                   id={tv.id}
                                   title={tv.name}
                                   imgUrl={tv.poster_path}
                                   rating={tv.vote_average}
                                   releaseDate={tv.first_air_date}
                               />
                           ))}
                       </Section>
                   )}
               </Container>
           )
    )
    ;
};

TvPresenter.propTypes = {
    airingToday : PropTypes.array,
    onAir : PropTypes.array,
    popular : PropTypes.array,
    topRated : PropTypes.array,
    loading : PropTypes.bool
};

export default TvPresenter;