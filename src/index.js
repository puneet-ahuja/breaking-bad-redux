import React from "react";
import ReactDOM from "react-dom";
import {createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import Homepage from './components/homepage';
// import  'node_modules/bootstrap/dist/css/bootstrap.css';
import "./styles.css";

import { default as rootSaga } from './sagas';
import reducer from './reducers/breaking-bad-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <Homepage />
    </Provider>   ,
  document.getElementById('root')
);

store.dispatch({type:'FETCH_HOMEPAGE_REQUEST'});




