import {requestProperties} from '../property/properties_actions'

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => {
    return {
        type: CHANGE_FILTER,
        filter,
        value
    }
}

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER,

    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => { 
    
    if (filter == 'cityFilter') {
        value = ['Chicago', 'Miami', 'New York', 'San Francisco'].includes(value) ? value : '';
    }
    dispatch(changeFilter(filter, value));
    return requestProperties(getState().ui.filters)(dispatch);
}

export const removeFilter = () => (dispatch, getState) => {
    dispatch(clearFilter());
    return requestProperties(getState().ui.filters)(dispatch);
}