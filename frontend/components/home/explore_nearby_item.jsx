import React from 'react'
import {withRouter} from 'react-router'

class ExploreNearbyItem extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }



    onChange(city, updateFilter, zoom, lat, lng) {
        return e => {
            
            updateFilter('cityFilter', city, zoom, lat, lng)

            this.props.history.push('/properties')
            
        }
    }

    render() {
        
        
        const {name, updateFilter} = this.props
        return (
        <div onClick={this.onChange(name, updateFilter, 12, this.props.lat, this.props.lng)} className='city-container'>
            <img className='explore-nearby-item-image' src={this.props.image} alt="" />
            <div className='city-text'>
                <p className='city-name'>{this.props.name}</p>
                <p className='city-known-for'>{this.props.knownFor}</p>
            </div>
        </div>
        )
    }
}

export default withRouter(ExploreNearbyItem);