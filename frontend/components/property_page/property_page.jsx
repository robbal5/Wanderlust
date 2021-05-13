import React from 'react';
import PropertyHeader from './property_header';
import PropertyDetails from './property_details';
import PropertyReservation from './property_reservation'

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertyHeader />
                <PropertyDetails />
                <PropertyReservation />
            </div>
        )
    }
}

export default PropertyPage;