import * as APIReviewUtil from '../../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}
    

export const createReview = (review) => (dispatch) => {
    return APIReviewUtil.createReview(review)
    .then(revs => dispatch(receiveReviews(revs)))
}

