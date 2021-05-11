import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session/session_actions'
import {CLOSE_MODAL, OPEN_MODAL} from '../actions/modal/modal_actions'

const SessionErrorsReducer = (state=[], action) => {
    Object.freeze(state)
    debugger
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLOSE_MODAL:
            return [];
        case OPEN_MODAL:
            return [];
        default:
            return state;
    }
}

export default SessionErrorsReducer;