import React from 'react';
import PropertiesImage from './properties_image';
import PropertiesIntro from './properties_intro';
class PropertiesPaneIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <PropertiesImage />
                <PropertiesIntro />
            </div>
        )
    }
}

export default PropertiesPaneIndex;