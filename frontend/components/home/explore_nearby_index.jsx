import React from 'react'
import ExploreNearbyItem from './explore_nearby_item';

class ExploreNearbyIndex extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let cities = {
            1: { name: 'New York', knownFor: 'Tourists', image: window.newYork },
            2: { name: 'San Francisco', knownFor: 'Heart of Tech', image: window.sanFrancisco },
            3: { name: 'Chicago', knownFor: 'Home of Deep Dish', image: window.chicago },
            4: { name: 'Miami', knownFor: 'Amazing Nightlife', image: window.miami },
        }
        return (
            <div className='explore-nearby-index'>
                <h2 className='popular-text'>Popular Destinations</h2>
                <div className='cities-container'>
                {Object.values(cities).map((city, idx) => {
                    return <ExploreNearbyItem updateFilter={this.props.updateFilter} key={idx} name={city.name} knownFor={city.knownFor} image={city.image} />
                })}
                </div>
            </div>
        )
    }
}

export default ExploreNearbyIndex;