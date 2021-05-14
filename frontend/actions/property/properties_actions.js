import * as APIPropertyUtils from '../../util/property_api_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

//actions

export const receiveProperties = (payload) => {
    return {
        type: RECEIVE_PROPERTIES,
        payload
    }
}

export const receiveProperty = (payload) => {
    return {
        type: RECEIVE_PROPERTY,
        payload
    }
}

//thunk action creators

export const requestProperties = (filters) => dispatch => {
    debugger;
    return APIPropertyUtils.requestProperties(filters)
    .then(properties => dispatch(receiveProperties(properties)))
}

export const requestProperty = (propertyId) => dispatch => {
    return APIPropertyUtils.requestProperty(propertyId)
    .then(property => dispatch(receiveProperty(property)))
}