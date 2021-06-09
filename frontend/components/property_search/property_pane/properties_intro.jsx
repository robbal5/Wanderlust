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

        
        const {typeOfPlace, name, numberOfBedrooms, numberOfBathrooms, numberOfBeds, numberOfGuests, price, numReviews, reviewAvg} = property
        debugger;
        return (
            <div className='property-intro'>
                <p className='property-intro-subtext'>{typeOfPlace} in {this.props.city.name}</p>
                <p className='property-intro-name'>{name}</p>
                <p className='property-intro-subtext'>{' ' + numberOfGuests} {numberOfGuests > 1 ? ' guests' : ' guest'} ·
                                                        {' ' + numberOfBedrooms} {numberOfBedrooms > 1 ? ' bedrooms' : ' bedroom'} ·
                                                        {' ' + numberOfBeds} {numberOfBeds > 1 ? ' beds' : ' bed'} ·
                                                        {' ' +numberOfBathrooms} {numberOfBathrooms > 1 ? ' bathrooms' : ' bathroom'}</p>
                <div className='property-intro-footer'>
                    <p className='property-intro-reviews'><i className='fa fa-star review-stars'></i> {reviewAvg.toFixed(2)} ({numReviews} reviews)</p>
                    <p className='property-intro-price'><span>${price} </span>/night</p>
                </div>
                
            </div>
        )
    }
}

export default PropertiesIntro;