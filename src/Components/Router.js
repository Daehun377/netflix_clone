import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/tv"} exact component={TV} />
                <Route path={"/search"} exact component={Search} />
                <Redirect from={"*"} to={"/"}/>
            </Switch>
        </>
    </Router>
)
