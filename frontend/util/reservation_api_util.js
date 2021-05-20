

export const fetchReservations = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/reservations`
    })
}

export const updateReservation = (reservation) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${reservation.user_id}/reservations/${reservation.id}`
    })
}

export const createReservation = (reservation) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${reservation.user_id}/reservations`,
        data: { reservation }
    })
}

export const removeReservation = (reservation) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${reservation.user_id}/reservations/${reservation.id}`
    })
}