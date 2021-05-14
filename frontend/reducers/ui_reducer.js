import ModalReducer from './modal_reducer';
import {combineReducers} from 'redux'
import  FiltersReducer  from './filters_reducer';

const UiReducer = combineReducers({
    modal: ModalReducer,
    filters: FiltersReducer
})

export default UiReducer;