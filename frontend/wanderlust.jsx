import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'
import {signup, login, logout} from './actions/session/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();


    //TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signup = signup
    window.login = login
    window.logout = logout
    
    ReactDOM.render(<Root store={store} />, root)
})