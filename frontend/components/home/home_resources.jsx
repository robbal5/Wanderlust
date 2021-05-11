import React from 'react';
import ExploreNearbyIndex from './explore_nearby_index';
import LiveAnywhere from './live_anywhere';


class HomeResources extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>Home Resources
                <ExploreNearbyIndex />
                <LiveAnywhere />
            </div>

        )
    }
}

export default HomeResources;