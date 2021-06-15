import PropertyReviewsIndex from './property_reviews_index'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/review/review_actions'
import { openModal } from '../../actions/modal/modal_actions'



const mSTP = (state, ownProps) => {
    let currentProperty = state.session.currentProperty;
    let reviews = currentProperty ? currentProperty.reviews : [];
    return {
        reviews: reviews,
        action: state.session.actionOccurred,
    }
}

const mDTP = (dispatch) => {
    return {
        deleteReview: (review) => dispatch(deleteReview(review)),
        openModal: (modal, data) => dispatch(openModal(modal, data))
        
    }
}


export default connect(mSTP, mDTP)(PropertyReviewsIndex);