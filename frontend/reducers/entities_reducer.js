import UsersReducer from './users_reducer'
import CitiesReducer from './cities_reducer'
import {combineReducers} from 'redux'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    cities: CitiesReducer,
})

export default EntitiesReducer;