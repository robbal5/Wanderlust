import React from 'react';
import PropertyAmenitiesIndexItem from './property_amenities_index_item'

class PropertyAmenitiesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2 className='property-amenities-header'>Amenities</h2>
                <PropertyAmenitiesIndexItem />
            </div>
        )
    }
}

export default PropertyAmenitiesIndex;