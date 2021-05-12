import { RECEIVE_STATES } from '../actions/state/state_actions'

const StatesReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STATES:
            return action.states;
        default:
            return state;
    }
}

export default StatesReducer;