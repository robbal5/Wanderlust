import React from 'react';
import PropertiesPaneHeader from './properties_pane_header';
import PropertiesPaneIndex from './properties_pane_index';

class PropertyPane extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div className='property-pane'>
            <PropertiesPaneHeader removeFilter = {this.props.removeFilter} updateFilter={this.props.updateFilter} cities={this.props.cities} />
            <PropertiesPaneIndex properties={this.props.properties} cities={this.props.cities} addresses={this.props.addresses}/>
        </div>
        )
    }
}

export default PropertyPane;