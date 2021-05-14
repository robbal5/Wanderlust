import {requestProperties} from '../property/properties_actions'

export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = (filter, value) => {
    return {
        type: UPDATE_FILTER,
        filter,
        value
    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return requestProperties(getState().ui.filters)(dispatch);
}