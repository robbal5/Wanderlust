import React from 'react'
import {withRouter} from 'react-router'

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