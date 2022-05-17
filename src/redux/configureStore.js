import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import loginAuthReducer from './ducks/loginAuth';
import userReducer from "./ducks/user";


const reducer = combineReducers({
    login: loginAuthReducer,
    user: userReducer,
})

const store = configureStore({
    reducer,
});

export default store;