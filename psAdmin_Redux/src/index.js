import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './route.js';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore(); //we can set initial
// state here if we want to rehydrate state passed by server etc.//overrides the state in reducers
render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);