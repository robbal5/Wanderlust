import React from 'react';
import PropertyReviewsIndexItem from './property_reviews_index_item'
class PropertyReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const{reviews} = this.props;
        return (
            <div>
                <h2 className='property-reviews-header'>Reviews</h2>
                <ul className='property-reviews-list'>
                    {Object.values(reviews).map((review,idx) => {
                        return <PropertyReviewsIndexItem key={idx} review={review} />
                    })}
                </ul>
            </div>
        )
    }
}

export default PropertyReviewsIndex;