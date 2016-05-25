import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

//Pages
import Home from './Home.jsx'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
    </Router>
)