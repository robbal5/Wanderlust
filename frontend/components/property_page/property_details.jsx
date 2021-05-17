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
                <PropertyMains currentProperty={this.props.currentProperty}/>
                <PropertyAmenitiesIndex amenities={this.props.currentProperty.amenities}/>
                <PropertyReviewsIndex currentUser={this.props.currentUser} openModal = {this.props.openModal} reviews={this.props.currentProperty.reviews}/>
                <PropertyLocation address={this.props.currentProperty.address} />
            </div>
        )
    }
}

export default PropertyDetails;