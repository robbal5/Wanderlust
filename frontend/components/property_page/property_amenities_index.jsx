import React from 'react';
import PropertyAmenitiesIndexItem from './property_amenities_index_item'

class PropertyAmenitiesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {amenities} = this.props
        return (
            <div>
                <h2 className='property-amenities-header'>Amenities</h2>
                    <ul className='property-amenities-list'>
                        {Object.values(amenities).map( (amenity, idx) => {
                          return  <PropertyAmenitiesIndexItem key={idx} amenity = {amenity}/>
                        })}
                    </ul>
                
            </div>
        )
    }
}

export default PropertyAmenitiesIndex;