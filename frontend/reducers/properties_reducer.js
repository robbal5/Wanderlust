import {RECEIVE_PROPERTIES, RECEIVE_PROPERTY} from '../actions/property/properties_actions'
import {RECEIVE_RESERVATIONS} from '../actions/reservations/reservation_actions'

const PropertiesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            if (!action.payload.properties){
                return {};
            }else {
                return action.payload.properties;
            }
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, { [action.payload.property.id]: action.payload.property })
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, state, action.payload.properties)
        // case RECEIVE_PROPERTY:
            // return Object.assign({}, state, {[action.payload.property.id]:action.payload.property})
            // return Object.assign({}, state, {currentProperty: action.payload})
        default:
            return state;
    }
}

export default PropertiesReducer;