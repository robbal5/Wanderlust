import React from 'react'
import ExploreNearbyItem from './explore_nearby_item';

class ExploreNearbyIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let cities = {
            1: { name: 'New York', knownFor: 'The Big Apple', image: window.newYork, lat: 40.73878, lng: -73.994563 },
            2: { name: 'San Francisco', knownFor: 'The Golden City', image: window.sanFrancisco, lat: 37.78632, lng: -122.42043 },
            3: { name: 'Chicago', knownFor: 'The Windy City', image: window.chicago, lat: 41.8865, lng: -87.64264 },
            4: { name: 'Miami', knownFor: 'The Magic City', image: window.miami, lat: 25.76802, lng: -80.19409 },
        }
        
        return (
            <div className='explore-nearby-index'>
                <h2 className='popular-text'>Popular Destinations</h2>
                <div className='cities-container'>
                {Object.values(cities).map((city, idx) => {
                    return <ExploreNearbyItem updateFilter={this.props.updateFilter} key={idx} name={city.name} knownFor={city.knownFor} image={city.image} lat={city.lat} lng={city.lng} />
                })}
                </div>
            </div>
        )
    }
}

export default ExploreNearbyIndex;