import {requestProperties} from '../property/properties_actions'
import { changeLocation, resetLocation } from '../property_map/property_map_actions'

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

export const updateFilter = (filter, value, zoom, lat, lng) => (dispatch, getState) => { 
    
    if (filter == 'cityFilter') {
        value = ['Chicago', 'Miami', 'New York', 'San Francisco'].includes(value) ? value : '';
    }
    dispatch(changeFilter(filter, value));
    dispatch(changeLocation({lat, lng}, zoom))
    return requestProperties(getState().ui.filters)(dispatch);
}

export const removeFilter = () => (dispatch, getState) => {
    dispatch(clearFilter());
    dispatch(resetLocation())
    return requestProperties(getState().ui.filters)(dispatch);
}