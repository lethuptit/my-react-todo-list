import React from 'react';
import {createRoot} from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import todoWatcher from './redux/todo.watcher.saga';
import categoryList from './redux/category.reducer';
import taskList from './redux/task.reducer';
import infoApp from './redux/info.reducer';
import showFilter from './redux/showFilter.reducer'
const sagaMiddleware = createSagaMiddleware();

// Don't include logger in Redux middleware unless in development mode
const middlewareList = process.env.REACT_APP_NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  // add each of the reducers to the store
  combineReducers({
    infoApp,
    taskList,
    categoryList,
    showFilter,
  }),
  // adds listed middleware to the store
  applyMiddleware(...middlewareList),
);

// Setup the taskWatcher in the saga middleware 
sagaMiddleware.run(todoWatcher);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>
);