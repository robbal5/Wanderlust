import React from 'react';

class PropertiesIntro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const property = this.props.property;
        if (!property){
            return null;
        }

        
        const {typeOfPlace, name, numberOfBedrooms, numberOfBathrooms, numberOfBeds, numberOfGuests, price} = property
        
        return (
            <div className='property-intro'>
                <p className='property-intro-subtext'>{typeOfPlace} in {this.props.city.name}</p>
                <p className='property-intro-name'>{name}</p>
                <p className='property-intro-line'>_______</p>
                <p className='property-intro-subtext'>{numberOfGuests} guest(s), {numberOfBedrooms} bedroom(s), {numberOfBeds} bed(s), {numberOfBathrooms} bath(s)</p>
                <p className='property-intro-price'><span>${price} </span>/night</p>
            </div>
        )
    }
}

export default PropertiesIntro;