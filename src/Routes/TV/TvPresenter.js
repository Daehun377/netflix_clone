import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const TvPresenter = ({airingToday, onAir, popular, loading, topRated}) => {
    return (
       loading
        ?(<Loader />)
           :(
               <div>
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
               </div>
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