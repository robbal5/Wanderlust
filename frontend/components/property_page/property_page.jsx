import React from 'react';
import PropertyHeader from './property_header';
import PropertyDetails from './property_details';
import PropertyReservation from './property_reservation'
import PropertyPhotos from './property_photos';

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.requestProperty(this.props.match.params.property_id)
        window.scrollTo(0, 0)
    }

    render() {
        if (!this.props.currentProperty) {
            return null;
        }
       
        
        const {currentProperty, cities, states, openModal, currentUser, createReservation, reviews, deleteReview} = this.props;
        const city = cities[currentProperty.address.cityId]
        
        return (
            <div className='property-page'>
                
                <PropertyHeader currentProperty={currentProperty} city= {city} state = {states[city.stateId]} />
                <PropertyPhotos photoUrls = {currentProperty.property.photoUrls} />
                <PropertyDetails deleteReview={deleteReview} reviews={reviews} openModal={openModal} createReservation={createReservation} currentUser={currentUser} openModal= {openModal} currentProperty={currentProperty}/>
                <PropertyReservation reservations={currentProperty.reservations}/>
            </div>
        )
    }
}

export default PropertyPage;