import {connect} from 'react-redux';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal/modal_actions';
import { signup } from '../../actions/session/session_actions'
import SessionForm from './session_form'
const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <span>
            <button onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('login'))
            }
            }>Login</button></span>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SessionForm);