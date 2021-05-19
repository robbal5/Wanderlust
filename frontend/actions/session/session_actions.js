import * as APISessionUtils from '../../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'


//Actions
export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => {
    return {
    type: LOGOUT_CURRENT_USER,
    }
}

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}



//Thunk Action Creators
export const login = (user) => dispatch => {
    return APISessionUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
     err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
    
    return APISessionUtils.logout()
    .then(() => dispatch(logoutCurrentUser()), 
    err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const signup = user => dispatch => {
    return APISessionUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
}

