import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Routers from './Routers'
import promise from 'redux-promise'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/default.scss'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devtools)
ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , document.getElementById('root'));
