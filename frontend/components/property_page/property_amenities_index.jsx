import React from 'react';
import PropertyAmenitiesIndexItem from './property_amenities_index_item'

class PropertyAmenitiesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertyAmenitiesIndexItem />
            </div>
        )
    }
}

export default PropertyAmenitiesIndex;