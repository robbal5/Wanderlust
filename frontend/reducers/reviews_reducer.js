import { RECEIVE_PROPERTY } from '../actions/property/properties_actions'

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, action.payload.reviews)
        default:
            return state;
    }
}

export default ReviewsReducer;