import React from 'react'
import {withRouter} from 'react-router'
import MarkerManager from '../../../util/marker_manager'

class PropertyMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger;
        // const mapOptions = {
        //     center: {
        //         lat: 37.773972,
        //         lng: -122.431297
        //     }, // San Francisco coords
        //     zoom: 13
        // };
        const mapOptions = {...this.props.mapLocation};
        
        
        const map = this.refs.map
        this.map = new google.maps.Map(map, mapOptions)
        this.MarkerManager = new MarkerManager(this.map)
    }

    componentDidUpdate() {
        debugger;
        const newCenter = {...this.props.mapLocation.center}
        const newZoom = this.props.mapLocation.zoom
        this.map.setCenter(newCenter)
        this.map.setZoom(newZoom)
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