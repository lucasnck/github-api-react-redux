import React from 'react';

// pages
import Page from './templates/Page'
import Home from './pages/Home'

// components
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routers = () => {
    return (
        <Router>
            <Route exact path="/" component={(props) => <Page content={Home} {...props} />} />
        </Router>
    )
}

export default Routers