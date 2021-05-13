import React from 'react';

class PropertiesImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div className='properties-image-container'>
                <img src={this.props.imageUrls[0]} alt="" className='properties-image' />
            </div>
        )
    }
}

export default PropertiesImage;