import { connect } from 'react-redux';
import UserPanel from './user_panel'

import {signup, logout, login} from '../../actions/session/session_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(UserPanel);
