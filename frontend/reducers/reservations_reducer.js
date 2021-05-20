import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION, CHANGE_RESERVATION  } from '../actions/reservations/reservation_actions'
import {LOGOUT_CURRENT_USER} from '../actions/session/session_actions'

const ReservationsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = { ...state };
    
    switch (action.type) {
        
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, {[action.reservation.reservation.id]:action.reservation.reservation})
        case RECEIVE_RESERVATIONS:
            if (action.payload.reservations){
                return action.payload.reservations 
            }
            else {
                return state;
            }
        
        case DELETE_RESERVATION:
            
            delete newState[action.reservation.reservation.id]
            return newState
        case CHANGE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState

        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default ReservationsReducer;