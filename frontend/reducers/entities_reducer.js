import UsersReducer from './users_reducer'
import CitiesReducer from './cities_reducer'
import {combineReducers} from 'redux'
import StatesReducer from './states_reducer';
import PropertiesReducer from './properties_reducer'
import AddressReducer from './addresses_reducer'
import AmenitiesReducer from './amenities_reducer';
import PropertyAmenitiesReducer from './property_amenities_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    cities: CitiesReducer,
    states: StatesReducer,
    properties: PropertiesReducer,
    addresses: AddressReducer,
    amenities: AmenitiesReducer,
    propertyAmenities: PropertyAmenitiesReducer,
    reservations: ReservationsReducer,
    reviews: ReviewsReducer

})

export default EntitiesReducer;