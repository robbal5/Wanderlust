import {connect} from 'react-redux'
import PropertiesSearch from './properties_search'
import {requestProperties} from '../../actions/property/properties_actions'

const mSTP = (state) => {
    return {
        properties: state.properties,

    }
}

const mDTP = (dispatch) => {
    return {
        requestProperties: () => dispatch(requestProperties())
    }
}

export default connect(mSTP, mDTP)(PropertiesSearch)