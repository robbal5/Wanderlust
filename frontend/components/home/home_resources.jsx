import React from 'react';
import DiscoverExperiences from './discover_experiences';
import ExploreNearbyIndex from './explore_nearby_index';
import LiveAnywhere from './live_anywhere';


class HomeResources extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>
                <ExploreNearbyIndex />
                <DiscoverExperiences />
                <LiveAnywhere />
            </div>

        )
    }
}

export default HomeResources;