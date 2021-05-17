import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session/session_actions'
import {RECEIVE_PROPERTY} from '../actions/property/properties_actions';
import {RECEIVE_REVIEWS} from '../actions/review/review_actions'


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
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, {currentProperty: action.payload} )
        case RECEIVE_REVIEWS:
            let newState = {...state};
            let oldRevs = newState.currentProperty.reviews;
            let newRevs = Object.assign({}, oldRevs, {[action.reviews.id]:action.reviews});
            newState.currentProperty.reviews = newRevs;
            return newState;
        default:
            return state;
    }
   
}

export default SessionReducer;