import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modal/modal_actions';
import {login} from '../../actions/session/session_actions'
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    };
};

const mDTP = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('signup'))}
            }>Sign up</button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SessionForm)