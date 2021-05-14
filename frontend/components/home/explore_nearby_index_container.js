
import {connect} from 'react-redux'
import ExploreNearbyIndex from './explore_nearby_index'
import {updateFilter} from '../../actions/filter/filter_actions'
const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
    }
}

export default connect(mSTP, mDTP)(ExploreNearbyIndex);