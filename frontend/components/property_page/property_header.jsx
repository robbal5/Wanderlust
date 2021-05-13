import React from 'react';
import {withRouter} from 'react-router'

class PropertyHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div className='property-header'>
                <h2 className='property-header-name'>{this.props.property.name}</h2>
                <div className='property-header-subitems'>
                    <p>Review Rating and Link</p>
                    <p>Superhost</p>
                    <p>City, State, Country</p>
                </div>
                
            </div>
        )
    }
}

export default PropertyHeader;