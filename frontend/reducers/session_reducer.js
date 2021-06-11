import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session/session_actions'
import {RECEIVE_PROPERTY} from '../actions/property/properties_actions';
import {RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, CHANGE_REVIEW} from '../actions/review/review_actions'
import {RECEIVE_RESERVATION} from '../actions/reservations/reservation_actions'


const _newSess = {
    id: null,
    recentPropertyViewIds: [],
    recentCitySearchIds: [],
    actionOccurred: false
}
const SessionReducer = (state=_newSess, action) => {
    
    Object.freeze(state)
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            return _newSess
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, {currentProperty: action.payload} )
        case RECEIVE_RESERVATION:
            let oldRes = newState.currentProperty.reservations;
            let newRes = Object.assign({}, oldRes, {[action.reservation.reservation.id]: action.reservation.reservation})
            newState.currentProperty.reservations = newRes;
            return newState;
        case RECEIVE_REVIEW:
            let oldRevs = newState.currentProperty.reviews;
            let newRevs = Object.assign({}, oldRevs, {[action.review.id]:action.review});
            newState.currentProperty.reviews = newRevs;
            newState.actionOccurred = !newState.actionOccurred;
            return newState;
        case REMOVE_REVIEW:
            delete newState.currentProperty.reviews[action.review.id];
            newState.actionOccurred = !newState.actionOccurred;
            return newState;
        case CHANGE_REVIEW:
            newState.currentProperty.reviews[action.review.id] = action.review;
            return newState;
        default:
            return state;
    }
   
}

export default SessionReducer;