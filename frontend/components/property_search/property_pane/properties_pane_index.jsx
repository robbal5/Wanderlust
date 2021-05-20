import React from 'react';
import PropertiesPaneIndexItem from './properties_pane_index_item'
class PropertiesPaneIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        debugger;
        const properties = this.props.properties
        const addresses = this.props.addresses

        if (Object.values(addresses).length < Object.values(properties).length) {
            return (
                <h1>LOADING YOUR DREAM HOMES :)</h1>
            )
        }
        if (Object.values(properties).length < 1) {
            return (
                <h1>No search results match the specified criteria, please clear and try again!</h1>
            );
        }
        
        
        return (
            <div className='properties-pane-index'>
                {Object.values(this.props.properties).map(((property,idx) => {
                    const address = addresses[property.addressId]
                    
                    return <PropertiesPaneIndexItem key={idx} property={property} address={address} city={this.props.cities[address.cityId]} />
                }))}
            </div>
        )
    }
}

export default PropertiesPaneIndex;