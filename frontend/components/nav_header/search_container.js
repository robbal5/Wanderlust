import {connect} from 'react-redux';
import Search from './search';
import {requestCities} from '../../actions/city/city_actions'
import {requestStates} from '../../actions/state/state_actions'


const mSTP = (state, ownProps) => {
    return {
        states: state.states,
        cities: state.cities
    }
}

const mDTP = (dispatch) => {
    return {
        requestCities: () => dispatch(requestCities()),
        requestStates: () => dispatch(requestStates())
    }
}

export default connect(mSTP, mDTP)(Search)