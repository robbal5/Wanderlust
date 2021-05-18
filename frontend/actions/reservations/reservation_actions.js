import * as APIReservationUtil from '../../util/reservation_api_util'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const DELETE_RESERVATION = 'DELETE_RESERVATION'
export const CHANGE_RESERVATION = 'CHANGE_RESERVATION'

export const receiveReservations = (reservations) => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
}

export const receiveReservation = (reservation) => {
    return {
        type: RECEIVE_RESERVATION,
        reservation

    }
}

export const deleteReservation = (reservation) => {
    return {
        type: DELETE_RESERVATION,
        reservation
    }
}

export const changeReservation = (reservation) => {
    return {
        type: CHANGE_RESERVATION,
        reservation
    }
}


export const fetchReservations = (userId) => (dispatch) => {
    return APIReservationUtil.fetchReservations(userId)
    .then(reserves => dispatch(receiveReservations(reserves)))
}
export const createReservation = (reservation) => (dispatch) => {
    return APIReservationUtil.createReservation(reservation)
        .then(reserve => dispatch(receiveReservation(reserve)))
}

export const updateReservation = (reservation) => (dispatch) => {
    return APIReservationUtil.updateReservation(reservation)
    .then(reserve => dispatch(receiveReservation(reserve)))
}

export const removeReservation = (reservation) => dispatch => {
    return APIReservationUtil.removeReservation(reservation)
    .then(reservation => dispatch(deleteReservation(reservation)))
}

