import React from 'react';
import {withRouter} from 'react-router'

class PropertyHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div className='property-header'>
                <h2 className='property-header-name'>{this.props.currentProperty.property.name}</h2>
                <div className='property-header-subitems'>
                    <p>{Object.values(this.props.currentProperty.reviews).length} Total Reviews</p>
                    <p>Superhost</p>
                    <p>{this.props.city.name}, {this.props.state.name}</p>
                </div>
                
            </div>
        )
    }
}

export default PropertyHeader;