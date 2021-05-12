import React from 'react';
import PropertyPane from './property_pane/property_pane'
import PropertyMap from './property_map/property_map';
class PropertiesSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertyPane />
                <PropertyMap />
            </div>
        )
    }
}

export default PropertiesSearch;