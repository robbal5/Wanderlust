import {RECEIVE_PROPERTIES, RECEIVE_PROPERTY} from '../actions/property/properties_actions'

const PropertiesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger;
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.payload.properties;
        // case RECEIVE_PROPERTY:
            // return Object.assign({}, state, {[action.payload.property.id]:action.payload.property})
            // return Object.assign({}, state, {currentProperty: action.payload})
        default:
            return state;
    }
}

export default PropertiesReducer;