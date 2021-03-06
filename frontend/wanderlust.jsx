import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'
import {signup, login, logout} from './actions/session/session_actions'
import {requestCities} from './actions/city/city_actions'
import {requestStates} from './actions/state/state_actions'
import {requestProperty} from './actions/property/properties_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        let preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore();
    }
    
    //TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signup = signup
    window.login = login
    window.logout = logout
    window.requestCities = requestCities
    window.requestStates = requestStates
    window.requestProperty = requestProperty
    
    ReactDOM.render(<Root store={store} />, root)
})