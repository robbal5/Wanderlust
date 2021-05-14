import React from 'react'
import {withRouter} from 'react-router'

class ExploreNearbyItem extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(city, updateFilter) {
        return e => {
            debugger;
            updateFilter('cityFilter', city)
            this.props.history.push('/properties')
            debugger;
        }
    }

    render() {
        const {name, updateFilter} = this.props
        return (
        <div onClick={this.onChange(name, updateFilter)} className='city-container'>
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