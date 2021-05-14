import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

class PropertyHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    const 

    render() {
        
        return (
            <div className='property-header'>
                <h2 className='property-header-name'>{this.props.currentProperty.property.name}</h2>
                <div className='property-header-bar'>
                <div className='property-header-subitems'>
                    <p>{Object.values(this.props.currentProperty.reviews).length} Total Reviews</p>
                    <p>Superhost</p>
                    <p>{this.props.city.name}, {this.props.state.name}</p>    
                </div>
                    <Link to="/properties"><button className='property-header-back-button'>Back to search</button></Link>
                </div>
                
            </div>
        )
    }
}

export default withRouter(PropertyHeader);