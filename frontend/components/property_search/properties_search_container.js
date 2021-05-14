import {connect} from 'react-redux'
import PropertiesSearch from './properties_search'
import {requestProperties} from '../../actions/property/properties_actions'

const mSTP = (state) => {
    return {
        properties: state.entities.properties,
        cities: state.entities.cities,
        addresses: state.entities.addresses,
        filters: state.ui.filters

    }
}

const mDTP = (dispatch) => {
    return {
        requestProperties: (filters) => dispatch(requestProperties(filters))
    }
}

export default connect(mSTP, mDTP)(PropertiesSearch)