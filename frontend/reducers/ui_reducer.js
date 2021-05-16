import ModalReducer from './modal_reducer';
import {combineReducers} from 'redux'
import  FiltersReducer  from './filters_reducer';
import PropertyMapReducer from './property_map_reducer'

const UiReducer = combineReducers({
    modal: ModalReducer,
    filters: FiltersReducer,
    mapLocation: PropertyMapReducer
})

export default UiReducer;