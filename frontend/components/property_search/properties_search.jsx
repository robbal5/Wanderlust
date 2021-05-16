import React from 'react';
import PropertyPane from './property_pane/property_pane'
import PropertyMap from './property_map/property_map';
class PropertiesSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.requestProperties(this.props.filters);
        window.scrollTo(0, 0)

    }

    render() {
        return (
            <div className='properties-search'>
                <PropertyPane filters={this.props.filters} 
                                removeFilter = {this.props.removeFilter} 
                                updateFilter={this.props.updateFilter} 
                                properties = {this.props.properties} 
                                cities={this.props.cities} 
                                addresses={this.props.addresses} />

                <PropertyMap properties={this.props.properties} 
                                addresses={this.props.addresses} 
                                mapLocation={this.props.mapLocation}/>
            </div>
        )
    }
}

export default PropertiesSearch;