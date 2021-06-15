import PropertiesSearch from "../components/property_search/properties_search"


export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${review.user_id}/reviews`,
        data: { review }
    })
}

export const deleteReview = (review) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `api/users/${review.userId}/reviews/${review.id}`,
        data: {review}
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${review.user_id}/reviews/${review.reviewId}`,
        data: {review}
    })
}