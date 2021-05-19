import React from 'react'
import {withRouter} from 'react-router'
import MarkerManager from '../../../util/marker_manager'

class PropertyMap extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        
 
        const mapOptions = {...this.props.mapLocation};
        
        
        const map = this.refs.map
        this.map = new google.maps.Map(map, mapOptions)
        this.MarkerManager = new MarkerManager(this.map, this.handleClick)
        const {properties, addresses} = this.props
        if (Object.values(addresses).length > 1) {
            this.MarkerManager.updateMarkers(properties, addresses)
        }
    }

    componentDidUpdate() {
        
        const newCenter = {...this.props.mapLocation.center}
        const newZoom = this.props.mapLocation.zoom
        this.map.setCenter(newCenter)
        this.map.setZoom(newZoom)
        const { properties, addresses } = this.props
        this.MarkerManager.updateMarkers(properties, addresses)
    }

    handleClick(propertyId) {
        this.props.history.push(`/properties/${propertyId}`)
    }

    render() {

        return(
            <div className='map' ref='map'>
                propertyMap
            </div>
             
        )
    }
    
}

export default withRouter(PropertyMap);