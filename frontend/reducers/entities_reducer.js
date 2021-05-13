import UsersReducer from './users_reducer'
import CitiesReducer from './cities_reducer'
import {combineReducers} from 'redux'
import StatesReducer from './states_reducer';
import PropertiesReducer from './properties_reducer'
import AddressReducer from './addresses_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    cities: CitiesReducer,
    states: StatesReducer,
    properties: PropertiesReducer,
    addresses: AddressReducer
})

export default EntitiesReducer;