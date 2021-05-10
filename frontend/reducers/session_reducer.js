import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session/session_actions'


const _newSess = {
    id: null,
    recentPropertyViewIds: [],
    recentCitySearchIds: []
}
const SessionReducer = (state=_newSess, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            return _newSess
        default:
            return state;
    }
   
}

export default SessionReducer;