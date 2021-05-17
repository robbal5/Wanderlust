import React from 'react'
import {withRouter} from 'react-router'
import MarkerManager from '../../../util/marker_manager'

class PropertyMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger;
        const map = this.refs.map
        this.map = new google.maps.Map(this.mapNode, this.props.mapLocation)
        this.MarkerManager = new MarkerManager(this.map)
    }

    render() {
        return(
            <div className='map' ref={map => this.mapNode = map}>
                propertyMap
            </div>
             
        )
    }
    
}

export default withRouter(PropertyMap);