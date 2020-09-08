import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Movies</Link>
                </li>
                <li>
                    <Link to={"/TV"}>TV</Link>
                </li>
                <li>
                    <Link to={"/Search"}>Search</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;