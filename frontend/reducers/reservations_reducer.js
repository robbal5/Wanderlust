import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION, CHANGE_RESERVATION  } from '../actions/reservations/reservation_actions'

const ReservationsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = { ...state };
    debugger;
    switch (action.type) {
        
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, action.reservation.reservation)
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
        default:
            return state;
    }
}

export default ReservationsReducer;