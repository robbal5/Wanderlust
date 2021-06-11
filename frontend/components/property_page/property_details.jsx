import React from 'react';
import PropertyMains from './property_mains';
import PropertyAmenitiesIndex from './property_amenities_index';
import PropertyReviewsIndex from './property_reviews_index';
import PropertyLocation from './property_location';
import PropertyCalendar from './property_calendar'
import ReservationCalendar from './reservation_calendar'

class PropertyDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <div className="property-details-section">
                    <div className='property-mains-and-amenities'>
                    <PropertyMains currentProperty={this.props.currentProperty}/>
                    <PropertyAmenitiesIndex amenities={this.props.currentProperty.amenities} />
                    </div>
                    <ReservationCalendar openModal={this.props.openModal} createReservation={this.props.createReservation} currentUser = {this.props.currentUser} property = {this.props.currentProperty.property} reservations={this.props.currentProperty.reservations} />
                </div>
                <PropertyReviewsIndex deleteReview={this.props.deleteReview} currentUser={this.props.currentUser} openModal = {this.props.openModal} reviews={this.props.reviews}/>
                <PropertyLocation address={this.props.currentProperty.address} />
            </div>
        )
    }
}

export default PropertyDetails;