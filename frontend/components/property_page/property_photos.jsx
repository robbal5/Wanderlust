import React from 'react';

class PropertyPhotos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div className='property-photos-container'>
            <img className='property-photo' src={this.props.photoUrls[0]} alt="" />
        </div>
        )
    }
}

export default PropertyPhotos;