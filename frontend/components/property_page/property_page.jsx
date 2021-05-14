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
    }

    render() {
        if (!this.props.currentProperty) {
            return null;
        }
        // debugger;

        // const id = this.props.match.params.property_id
        
        const {currentProperty, cities, states} = this.props;
        const city = cities[currentProperty.address.cityId]
        
        return (
            <div className='property-page'>
                
                <PropertyHeader currentProperty={currentProperty} city= {city} state = {states[city.stateId]} />
                <PropertyPhotos photoUrls = {currentProperty.property.photoUrls} />
                <PropertyDetails currentProperty={currentProperty}/>
                <PropertyReservation reservations={currentProperty.reservations}/>
            </div>
        )
    }
}

export default PropertyPage;