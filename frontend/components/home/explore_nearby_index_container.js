
import {connect} from 'react-redux'
import ExploreNearbyIndex from './explore_nearby_index'
import {updateFilter} from '../../actions/filter/filter_actions'
const mSTP = state => {
    return {
        cities: state.entities.cities
    }
}

const mDTP = dispatch => {
    return {
        updateFilter: (filter, value, zoom, lat, lng) => dispatch(updateFilter(filter,value, zoom, lat, lng))
    }
}

export default connect(mSTP, mDTP)(ExploreNearbyIndex);