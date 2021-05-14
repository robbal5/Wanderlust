import React from 'react';

class PropertyReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {review} = this.props
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const year = review.createdAt.split('-')[0];
        const month = months[parseInt(review.createdAt.split('-')[1])-1]
        
        return (
            <li className='property-review'>
                <h3 className='review-writer'>{review.name}</h3>
                <p className='review-date'>{month} {year}</p>
                <p className='review-text'>{review.review}</p>
            </li>
        )
    }
}

export default PropertyReviewsIndexItem;