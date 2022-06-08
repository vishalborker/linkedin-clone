import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import createSagaMiddleware from 'redux-saga';

// import all reducers here
import loginAuthReducer from './ducks/loginAuth';
import newsReducer from "./ducks/news";
import { notificationReducer } from "./ducks/notifications";
import postReducer from "./ducks/posts";
import userReducer from "./ducks/user";

import { watcherSaga } from "./sagas/rootSaga";


const reducer = combineReducers({
    login: loginAuthReducer,
    user: userReducer,
    news: newsReducer,
    posts: postReducer,
    notifications: notificationReducer,
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer,
    middleware,
});

// watcher saga, listens to actions
sagaMiddleware.run(watcherSaga);

export default store;