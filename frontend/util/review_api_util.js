

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${review.user_id}/reviews`,
        data: { review }
    })
}
