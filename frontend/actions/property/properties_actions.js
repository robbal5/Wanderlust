import * as APIPropertyUtils from '../../util/property_api_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';

//actions

export const receiveProperties = (properties) => {
    return {
        type: RECEIVE_PROPERTIES,
        properties
    }
}

export const receiveProperty = (property) => {
    return {
        type: RECEIVE_PROPERTY,
        property
    }
}

//thunk action creators

export const requestProperties = () => dispatch => {
    return APIPropertyUtils.requestProperties()
    .then(properties => receiveProperties(properties))
}

export const requestProperty = (propertyId) => dispatch => {
    return APIPropertyUtils.requestProperty(propertyId)
    .then(property => dispatch(receiveProperty(property)))
}