import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, DELETE_RESERVATION, CHANGE_RESERVATION  } from '../actions/reservations/reservation_actions'

const ReservationsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, action.reservation)
        case RECEIVE_RESERVATIONS:
            return action.payload.reservations 
        
        case DELETE_RESERVATION:
            delete newState[action.reservation.id]
            return newState
        case CHANGE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState
        default:
            return state;
    }
}

export default ReservationsReducer;