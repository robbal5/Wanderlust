import * as APIStateUtils from '../../util/state_api_util'

export const RECEIVE_STATES = 'RECEIVE_STATES';

//action creators
export const receiveStates = (states) => {

    return {
        type: RECEIVE_STATES,
        states
    }
}

//thunk

export const requestStates = () => dispatch => {
    return APIStateUtils.requestStates()
        .then(states => dispatch(receiveStates(states)))
}