import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import * as authEpics from '../store/epic/auth'


import TodoListReducer from './reducers/todoReducer';
import authReducer from './reducers/auth-reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    routing: routerReducer
    // more reducers go here
});



const rootEpic = combineEpics(
    authEpics.registerEpic,
    authEpics.loginEpic,
    authEpics.logoutEpic

);

const epicMiddleware = createEpicMiddleware(rootEpic);


let store = createStore(rootReducer, compose( applyMiddleware(epicMiddleware),applyMiddleware(thunk)));

store.subscribe(() =>
    console.log(store.getState())
);

export default store;
