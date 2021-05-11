import React from 'react';
import ExploreNearbyIndex from './explore_nearby_index';
import LiveAnywhere from './live_anywhere';


class HomeResources extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let cities = {
            1: {name: 'New York', knownFor: 'Tourists', image: 'a'},
            2: { name: 'San Francisco', knownFor: 'Heart of Tech', image:'a' },
            3: { name: 'Chicago', knownFor: 'Home of Deep Dish', image: 'a '},
            4: { name: 'Miami', knownFor: 'Amazing Nightlife', image: 'a'},
        }
        return (
            <div>Home Resources
                <h2>Popular Destinations</h2>
                
                <ExploreNearbyIndex />
                <LiveAnywhere />
            </div>

        )
    }
}

export default HomeResources;