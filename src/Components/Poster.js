import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition : opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImgContainer = styled.div`
  margin-bottom: 7px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating}{
      opacity: 1;
    }
  }
`;


const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;
const ReleaseDate = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;





const Poster = ({id, title, imgUrl, rating, releaseDate, isMovie=false}) => { //이것도 마찬가지로 props.id, props.title등을 상수화해서 해준거임.
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
                <ImgContainer>
                    <Image
                        bgUrl={
                            imgUrl
                                ? (`https://image.tmdb.org/t/p/w500/${imgUrl}`)
                                : (require("../Image/emtyImage.png"))
                        }
                        // bgUrl={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
                    />
                    <Rating><span role="img" aria-label="rating">⭐</span>{rating}</Rating>
                </ImgContainer>
                <Title>{title.length > 18 ? `${title.substring(0,18)} ...` : title}</Title>
                <ReleaseDate>{releaseDate}</ReleaseDate>
            </Container>
        </Link>
    );
};

Poster.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    imgUrl : PropTypes.string,
    rating : PropTypes.number,
    releaseDate : PropTypes.string,
    isMovie : PropTypes.bool.isRequired
};

export default Poster;