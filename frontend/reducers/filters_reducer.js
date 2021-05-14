import { CHANGE_FILTER, CLEAR_FILTER} from '../actions/filter/filter_actions'

const defaultFilters = {
    cityFilter: '',
    placeFilter: ''
}

const FiltersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_FILTER:
            return Object.assign({}, state, {[action.filter]: action.value})
        case CLEAR_FILTER:
            return defaultFilters;
        default:
            return state;
    }
}

export default FiltersReducer;