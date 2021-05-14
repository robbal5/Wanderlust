import React from 'react';
import PropertiesImage from './properties_image';
import PropertiesIntro from './properties_intro'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

class PropertiesPaneIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <Link to={`/properties/${this.props.property.id}`}>
                <div className='properties-pane-index-item'>
                    <PropertiesImage imageUrls={this.props.property.photoUrls} />
                    <PropertiesIntro property={this.props.property} city={this.props.city} address={this.props.address}/>
                </div>
            </Link>
        )
    }
}

export default PropertiesPaneIndexItem;