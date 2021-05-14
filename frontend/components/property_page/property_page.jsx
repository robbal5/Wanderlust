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
        if (!this.props.property) {
            return null;
        }
        // debugger;

        // const id = this.props.match.params.property_id
    
        return (
            <div className='property-page'>
                <PropertyHeader property={this.props.property} />
                <PropertyPhotos />
                <PropertyDetails />
                <PropertyReservation />
            </div>
        )
    }
}

export default PropertyPage;