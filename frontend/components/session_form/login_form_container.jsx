import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modal/modal_actions';
import {login} from '../../actions/session/session_actions'
import SessionForm from './session_form';
import {fetchReservations} from '../../actions/reservations/reservation_actions'

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
            <span><button onClick={(e) => {
                e.preventDefault();
                dispatch(openModal('signup'))}
            }>Sign up</button></span>
        ),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    }
}

export default connect(mSTP, mDTP)(SessionForm)