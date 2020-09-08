import React from 'react';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <a href={"/"}>Movies</a>
                </li>
                <li>
                    <a href={"/TV"}>TV</a>
                </li>
                <li>
                    <a href={"/Search"}>Search</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;