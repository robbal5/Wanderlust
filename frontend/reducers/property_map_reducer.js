import {CHANGE_LOCATION, RESET_LOCATION} from '../actions/property_map/property_map_actions'

const defaultLocation = {
    center: {lat: 39.828300, lng: -98.579500},
    zoom: 4,
}

const PropertyMapReducer = (state = defaultLocation, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_LOCATION:
            return {
                center: action.center,
                zoom: action.zoom
            }
        case RESET_LOCATION:
            return defaultLocation;
        default:
            return state;
    }
}

export default PropertyMapReducer;