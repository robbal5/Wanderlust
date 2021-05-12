import React from 'react';
import PropertiesPaneHeader from './properties_pane_header';
import PropertiesPaneIndex from './properties_pane_index';

class PropertyPane extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div>
            <PropertiesPaneHeader />
            <PropertiesPaneIndex />
        </div>
    }
}

export default PropertyPane;