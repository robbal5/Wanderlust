import React from 'react';

class PropertyAmenitiesIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {iconUrl, name} = this.props.amenity
        debugger;
        return (
            <li className='property-amenity-item'> <i className='fas fa-arrow-right'></i><span className='property-amenity-item-text'>{name}</span></li>
           
        )
    }
}

export default PropertyAmenitiesIndexItem;