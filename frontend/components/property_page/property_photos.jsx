import React from 'react';

class PropertyPhotos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {photoUrls} = this.props
        return(
        <div className='property-photos-container'>
            <img className='main-property-photo' src={this.props.photoUrls[0]} alt="" />
            <div className='property-side-photos'>
                    {photoUrls.slice(1).map((photo, idx) => <img key={idx} className='side-property-photo' src={photo} alt="" /> )}
            </div>
        </div>
        )
    }
}

export default PropertyPhotos;