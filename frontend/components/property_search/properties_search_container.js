import {connect} from 'react-redux'
import PropertiesSearch from './properties_search'
import {requestProperties} from '../../actions/property/properties_actions'
import { updateFilter, removeFilter } from '../../actions/filter/filter_actions'


const mSTP = (state) => {
    return {
        properties: state.entities.properties,
        cities: state.entities.cities,
        addresses: state.entities.addresses,
        filters: state.ui.filters,
        mapLocation: state.ui.mapLocation


    }
}

const mDTP = (dispatch) => {
    return {
        requestProperties: (filters) => dispatch(requestProperties(filters)),
        updateFilter: (filter, value, zoom, lat, lng) => dispatch(updateFilter(filter, value, zoom, lat, lng)),
        removeFilter: () => dispatch(removeFilter())
    }
}

export default connect(mSTP, mDTP)(PropertiesSearch)