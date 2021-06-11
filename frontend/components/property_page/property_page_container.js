import {connect} from 'react-redux';
import PropertyPage from './property_page';
import { requestProperty } from '../../actions/property/properties_actions'
import {openModal} from '../../actions/modal/modal_actions'
import {createReservation} from '../../actions/reservations/reservation_actions'


const mSTP = (state, ownProps) => {
    let currentProperty = state.session.currentProperty;
    let reviews = currentProperty ? currentProperty.reviews : [];
    return {
        currentProperty: currentProperty,
        reviews: reviews,
        cities: state.entities.cities,
        states: state.entities.states,
        currentUser: state.session.id
       
    }
}

const mDTP = (dispatch) => {
    return {
        requestProperty: (property_id) => dispatch(requestProperty(property_id)),
        openModal: modal => dispatch(openModal(modal)),
        createReservation: reservation => dispatch(createReservation(reservation))
        
    }
}

export default connect(mSTP, mDTP)(PropertyPage);


