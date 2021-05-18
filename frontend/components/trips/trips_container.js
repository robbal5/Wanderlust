import Trips from './review_form'
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

export default connect(mSTP, mDTP)(Trips)