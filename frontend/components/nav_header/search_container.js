import {connect} from 'react-redux';
import Search from './search';
import {requestCities} from '../../actions/city/city_actions'
import {requestStates} from '../../actions/state/state_actions'
import {requestProperties} from '../../actions/property/properties_actions'
import { updateFilter } from '../../actions/filter/filter_actions'
import {withRouter} from 'react-router'


const mSTP = (state, ownProps) => {
    return {
        states: state.entities.states,
        cities: state.entities.cities,
        filters: state.ui.filters
    }
}

const mDTP = (dispatch) => {
    return {
        requestCities: () => dispatch(requestCities()),
        requestStates: () => dispatch(requestStates()),
        updateFilter: (filter, value, zoom, lat, lng) => dispatch(updateFilter(filter, value, zoom, lat, lng)),
        requestProperties: (filters) => dispatch(requestProperties(filters))
       
    }
}

export default withRouter(connect(mSTP, mDTP)(Search))