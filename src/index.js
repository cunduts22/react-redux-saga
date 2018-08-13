/**
 * Wrap our React.Element with Provider
 * create our store(@param reducers, applyMiddleware(@param saga))
 * saga.run(@param ourSagaConfiguration)
 */

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/main.scss'

import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import MyContainer from './containers'
import allReducers from './reducers'
import rootSaga from './sagas'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const reactSaga = createSagaMiddleware()

let store = createStore(allReducers, compose(
    applyMiddleware(reactSaga),
    reduxDevTools
))

reactSaga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <MyContainer></MyContainer>
    </Provider>
, document.getElementById('root'));