import {RECEIVE_PROPERTIES, RECEIVE_PROPERTY} from '../actions/property/properties_actions'

const AddressReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.payload.addresses
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, {[action.payload.address.id]: action.payload.address})
        default:
            return state;
    }
}

export default AddressReducer;