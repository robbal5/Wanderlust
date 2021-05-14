import React from 'react';
import DiscoverExperiences from './discover_experiences';
import ExploreNearbyIndexContainer from './explore_nearby_index_container';
import LiveAnywhere from './live_anywhere';


class HomeResources extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>
                <ExploreNearbyIndexContainer />
                <DiscoverExperiences />
                <LiveAnywhere />
            </div>

        )
    }
}

export default HomeResources;