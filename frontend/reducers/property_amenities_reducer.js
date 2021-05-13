import { RECEIVE_PROPERTY } from '../actions/property/properties_actions'

const PropertyAmenitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, action.payload.propertyAmenities)
        default:
            return state;
    }
}

export default PropertyAmenitiesReducer;