import {RECEIVE_PROPERTIES} from '../actions/property/properties_actions'

const AddressReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.payload.addresses
        default:
            return state;
    }
}

export default AddressReducer;