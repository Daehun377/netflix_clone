import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
  top: 0;
  left: 0;
  position: absolute;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: 40%;
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius : 8px;
  margin-right: 30px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Data = styled.div``;

const Title = styled.h3`
  font-size: 40px;
`;

const ItemContainer = styled.div`
  margin : 20px 0px;
`;

const Item = styled.span`
  font-size: 18px;
`;

const Divider = styled.span`
  margin : 0px 10px;
`;

const Overview = styled.p``; //숙제 




const DetailPresenter = ({ result, error, loading }) => {

    return (
        loading
            ? <Loader/>
            : (
            <Container>
                <Backdrop bgImage={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} />
                <Content>
                    <Cover
                        bgImage={
                            result.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                                :  require("../../Image/emtyImage.png")
                        }
                    />
                    <Data>
                        <Title>
                            {result.original_title
                                ? result.original_title
                                : result.original_name
                            }
                        </Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date
                                    ? result.release_date.substring(0,4)
                                    : result.first_air_date.substring(0,4)
                                }
                            </Item>
                            <Divider> • </Divider>
                            <Item>
                                {result.genres && result.genres.map((genre, index) => (
                                    index === result.genres.length - 1 //배열에서 , 를 나타냄.
                                        ? genre.name //하나만 뿌려줄거냐
                                        : `${genre.name} / ` //여러개면 /가 붙어서 여러개가 배열될거냐
                                ))}
                            </Item>
                        </ItemContainer>
                    </Data>
                </Content>
            </Container>
            )
    );
};

DetailPresenter.propTypes = {
    result : PropTypes.object,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired
};

export default DetailPresenter;