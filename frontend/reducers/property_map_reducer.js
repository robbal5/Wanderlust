import {CHANGE_LOCATION} from '../actions/property_map/property_map_actions'

const defaultLocation = {
    pos: {lat: 39.8283, lng: -98.5795},
    zoom: 8,
}

const PropertyMapReducer = (state = defaultLocation, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_LOCATION:
            return {
                pos: action.pos,
                zoom: action.zoom
            }
        default:
            return state;
    }
}

export default PropertyMapReducer;