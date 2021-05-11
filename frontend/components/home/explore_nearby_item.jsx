import React from 'react'

class ExploreNearbyItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className='city-container'>
            <img className='explore-nearby-item-image' src={this.props.image} alt="" />
            <div className='city-text'>
                <p className='city-name'>{this.props.name}</p>
                <p className='city-known-for'>{this.props.knownFor}</p>
            </div>
        </div>
        )
    }
}

export default ExploreNearbyItem;