import {connect} from 'react-redux';
import PropertyPage from './property_page';
import { requestProperty } from '../../actions/property/properties_actions'
import {openModal} from '../../actions/modal/modal_actions'
import {createReservation} from '../../actions/reservations/reservation_actions'


const mSTP = (state, ownProps) => {
    
    return {
        currentProperty: state.session.currentProperty,
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

 // property: property,
        // reservations: state.entities.reservations.filter(res => res.property_id == id),
        // reviews: state.entities.reviews.filter(review => review.property_id == id),
        // amenities: state.entities.propertyAmenities.filter(res => res.property_id == id).map(pa => state.entities.amenities[pa.amenity_id]),
        // user: state.entities.user[property.user_id],
        // address: address,
        // city: state.entites.cities[address.city_id]
