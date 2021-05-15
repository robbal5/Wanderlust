import React from 'react'
import {withRouter} from 'react-router'
import MarkerManager from '../../../util/marker_manager'

class PropertyMap extends React.Component {
    constructor(props) {
        super(props)
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