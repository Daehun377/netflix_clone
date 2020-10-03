import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "./Header";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={Movie} />
                <Route path={"/tv"} exact component={TV} />
                <Route path={"/search"} exact component={Search} />
                <Route path={"/movie/:id"} exact component={Detail} />
                <Route path={"/tv/:id"} exact component={Detail} />
                <Redirect from={"*"} to={"/"}/>
            </Switch>
        </>
    </Router>
)
