import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const Head = styled.header`
  color: white;
  position: fixed;
  top : 0;
  left : 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20,20,20,0.8);
  z-index : 10;
  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLINK = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`; //함수를 스타일링 할때 (LINK의 경우 react-router-dom에서 불러온 함수이기 때문에)



export default withRouter(({location : {pathname}}) => {
    return (
        <Head>
            <List>
                <Item current={pathname === "/"}>
                    <SLINK to={"/"}>Movies</SLINK>
                </Item>
                <Item current={pathname === "/tv"}>
                    <SLINK to={"/tv"}>TV</SLINK>
                </Item>
                <Item current={pathname === "/search"}>
                    <SLINK to={"/search"}>Search</SLINK>
                </Item>
            </List>
        </Head>
    )
});