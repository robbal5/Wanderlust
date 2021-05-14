import React from 'react';

class PropertyMains extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const {currentProperty} = this.props;
        const {numberOfGuests, numberOfBedrooms, numberOfBeds, numberOfBathrooms} = currentProperty.property
        return (
            <div className='property-mains-section'>
                <p className='property-mains-header'>
                    {currentProperty.property.typeOfPlace} hosted by {currentProperty.user.name}
                </p>
                <p className='property-room-details'>
                    {'  ' + numberOfGuests} {numberOfGuests > 1 ? ' guests' : ' guest'}
                    {' - ' + numberOfBedrooms} {numberOfBedrooms > 1 ? ' bedrooms' : ' bedroom'}
                    {' - ' + numberOfBeds} {numberOfBeds > 1 ? ' beds' : ' bed'}
                    {' - ' + numberOfBathrooms} {numberOfBathrooms > 1 ? ' bathrooms' : ' bathroom'}
                </p>
                <p className='property-description'>{currentProperty.property.description}</p>

            </div>
        )
    }
}

export default PropertyMains;