import {connect } from 'react-redux';
import {removeFilter} from '../../actions/filter/filter_actions';
import NavHeader from './nav_header';
import {withRouter} from 'react-router'

const mSTP = (state) => {
    return {

    }
}

const mDTP = (dispatch) => {
    return {
        removeFilter: () => dispatch(removeFilter())
    }
}

export default withRouter(connect(mSTP, mDTP)(NavHeader));