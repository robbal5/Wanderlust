import Trips from './trips'
import { connect } from 'react-redux'
import {fetchReservations} from '../../actions/reservations/reservation_actions'

const mSTP = (state) => {
    return {
        reservations: state.entities.reservations,
        properties: state.entities.properties,
        currentUser: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchReservations: (userId) => dispatch(fetchReservations(userId))
    }
}

const TripsContainer = connect(mSTP, mDTP)(Trips);

export default TripsContainer;