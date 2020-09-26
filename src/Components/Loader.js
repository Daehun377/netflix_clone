import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 48px;
  margin-top: 80px;
`;

const Loader = () => {
    return (
        <Container>
            <span role={"img"} aria-label={"loading"}>
                로딩중.....😀
            </span>
        </Container>
    );
};

export default Loader;