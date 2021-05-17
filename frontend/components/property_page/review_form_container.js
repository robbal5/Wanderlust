import ReviewForm from './review_form'
import {connect} from 'react-redux'
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import { createReview } from '../../actions/review/review_actions'


const mSTP = (state, ownProps) => {
    return {
        userId: state.session.id,
        property: state.session.currentProperty.property
    }
}

const mDTP = (dispatch) => {
    return {
    closeModal: () => dispatch(closeModal()),
    createReview: (review) => dispatch(createReview(review))
    }
}


export default connect(mSTP, mDTP)(ReviewForm);