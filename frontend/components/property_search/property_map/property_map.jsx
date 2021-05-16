import React from 'react'
import {withRouter} from 'react-router'
import MarkerManager from '../../../util/marker_manager'

class PropertyMap extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.map = new google.maps.Map(mapDOMNode, this.props.mapLocation)
    //     this.MarkerManager = new MarkerMAnager(this.map)
    // }

    render() {
        return(
            <div className='map' ref='map'>
                propertyMap
            </div>
        )
    }
    
}

export default withRouter(PropertyMap);