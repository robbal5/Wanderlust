import * as APICityUtils from '../../util/city_api_util'

export const RECEIVE_CITIES = 'RECEIVE_CITIES';

//action creators
export const receiveCities = (cities) => {
    
    return {
        type: RECEIVE_CITIES,
        cities
    }
}

//thunk

export const requestCities = () => dispatch => {
    return APICityUtils.requestCities()
    .then( cities => dispatch(receiveCities(cities)) )
}