import {RECEIVE_CURRENT_USER, RECEIVE_PROPERTY} from '../actions/session/session_actions'

const UsersReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
           return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, {[action.payload.user.id]: action.payload.user})
        default:
            return state
    }
}

export default UsersReducer;