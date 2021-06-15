import {connect} from 'react-redux'
import Modal from './modal'
import {closeModal} from '../../actions/modal/modal_actions'

const mSTP = (state) => {
    return {
        modal: state.ui.modal.type,
        modalData: state.ui.modal.data
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);