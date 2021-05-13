import React from 'react';
import PropertyMains from './property_mains';
import PropertyAmenitiesIndex from './property_amenities_index';
import PropertyReviewsIndex from './property_reviews_index';
import PropertyLocation from './property_location';

class PropertyDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertyMains />
                <PropertyAmenitiesIndex />
                <PropertyReviewsIndex />
                <PropertyLocation />
            </div>
        )
    }
}

export default PropertyDetails;