import {RECEIVE_PROPERTIES, RECEIVE_PROPERTY} from '../actions/property/properties_actions'

const PropertiesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.properties;
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, {[action.property.id]:action.property})
        default:
            return state;
    }
}

export default PropertiesReducer;