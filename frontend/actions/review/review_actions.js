import * as APIReviewUtil from '../../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}
    

export const createReview = (review) => (dispatch) => {
    
    return APIReviewUtil.createReview(review)
    .then(rev => dispatch(receiveReview(rev)))
}

