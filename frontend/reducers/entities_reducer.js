import UsersReducer from './users_reducer'
import CitiesReducer from './cities_reducer'
import {combineReducers} from 'redux'
import StatesReducer from './states_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    cities: CitiesReducer,
    states: StatesReducer
})

export default EntitiesReducer;