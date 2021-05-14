import {RECEIVE_CURRENT_USER} from '../actions/session/session_actions'
import {RECEIVE_PROPERTY} from '../actions/property/properties_actions'

const UsersReducer = (state={}, action) => {
    Object.freeze(state);
    debugger;
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