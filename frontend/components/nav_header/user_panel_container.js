import { connect } from 'react-redux';
import UserPanel from './user_panel'
import {logout} from '../../actions/session/session_actions'
import {openModal} from '../../actions/modal/modal_actions'



const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
        
    }
}

export default connect(mSTP, mDTP)(UserPanel);
