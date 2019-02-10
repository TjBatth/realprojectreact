import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import reducer from '../src/users/reducer'
import User from '../src/users/User';
import createSagaMiddleware from 'redux-saga'
import sagaMyUser from '../src/users/saga';

import * as serviceWorker from './serviceWorker';
const sagaMiddleware=createSagaMiddleware();
const store=createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaMyUser);

ReactDOM.render(
    
    <Provider store={store}>
    <User name="Tejinder "/>
  </Provider>,
   
    
    
    document.getElementById('root'));


serviceWorker.unregister();
