import React from 'react';
import PropertyReviewsIndexItem from './property_reviews_index_item'
class PropertyReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertyReviewsIndexItem />
            </div>
        )
    }
}

export default PropertyReviewsIndex;