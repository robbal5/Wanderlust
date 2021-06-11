import * as APIReviewUtil from '../../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CHANGE_REVIEW = 'CHANGE_REVIEW';

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

export const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        review
    }
}

export const changeReview = review => {
    return {
        type: CHANGE_REVIEW,
        review
    }
}
    

export const createReview = (review) => (dispatch) => {
    
    return APIReviewUtil.createReview(review)
    .then(rev => dispatch(receiveReview(rev)))
}

export const updateReview = (review) => (dispatch) => {
    return APIReviewUtil.updateReview(review)
    .then(rev => dispatch(changeReview(rev)))
}

export const deleteReview = (review) => (dispatch) => {
    return APIReviewUtil.deleteReview(review)
    .then(rev => dispatch(removeReview(rev)))
}

