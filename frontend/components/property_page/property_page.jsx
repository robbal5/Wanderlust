import React from 'react';
import PropertyHeader from './property_header';
import PropertyDetails from './property_details';
import PropertyReservation from './property_reservation'
import {requestProperty} from '../../actions/property/properties_actions'

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.requestProperty(this.props.match.params.property_id)
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