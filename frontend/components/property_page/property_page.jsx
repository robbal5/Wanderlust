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
        if (Object.values(this.props.properties).length < 1) {
            return null;
        }
        debugger;

        const id = this.props.match.params.property_id
        
        return (
            <div className='property-page'>
                <PropertyHeader property={this.props.properties[id]} />
                <PropertyPhotos />
                <PropertyDetails />
                <PropertyReservation />
            </div>
        )
    }
}

export default PropertyPage;