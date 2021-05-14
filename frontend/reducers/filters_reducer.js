import { CHANGE_FILTER} from '../actions/filter/filter_actions'

const defaultFilters = {
    cityFilter: '',
    placeFilter: ''
}

const FiltersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_FILTER:
            return Object.assign({}, state, {[action.filter]: action.value})
        default:
            return state;
    }
}

export default FiltersReducer;