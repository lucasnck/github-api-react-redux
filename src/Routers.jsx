import React from 'react';

// pages
import Page from './templates/Page'
import Home from './pages/Home'
import About from './pages/About'

// components
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routers = () => {
    return (
        <Router>
            <Route exact path="/" component={(props) => <Page content={Home} {...props} />} />
            <Route path="/about" component={(props) => <Page content={About} {...props} />} />
        </Router>
    )
}

export default Routers