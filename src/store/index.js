import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import * as authEpics from '../store/epic/auth'
import * as localStore from '../localStore'


import TodoListReducer,{ donorReducer,donorDetailsReducer} from './reducers/AppReducer';
import authReducer from './reducers/auth-reducer';

export const rootReducer = combineReducers({
    donorDetailsReducer,
    donorReducer,
    auth: authReducer,
    routing: routerReducer
    // more reducers go here
});



const rootEpic = combineEpics(
    authEpics.fetchDonorsFromServer,
    authEpics.registerEpic,
    authEpics.loginEpic,
    authEpics.logoutEpic

);

const epicMiddleware = createEpicMiddleware(rootEpic);


let store = createStore(rootReducer,localStore.get(),applyMiddleware(epicMiddleware));

store.subscribe(() => {
    const state = store.getState()
    localStore.set(state, ['donorDetailsReducer', 'donorReducer', 'auth', 'routing']);
    console.log(store.getState())

});


export default store;
