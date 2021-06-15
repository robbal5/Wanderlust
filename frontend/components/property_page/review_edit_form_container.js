import ReviewEditForm from './review_edit_form'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal/modal_actions';
import { updateReview } from '../../actions/review/review_actions'


const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        property: state.session.currentProperty.property,
        review: state.session.currentProperty.reviews[ownProps.reviewId]
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateReview: (review) => dispatch(updateReview(review)),

    }
}


export default connect(mSTP, mDTP)(ReviewEditForm);