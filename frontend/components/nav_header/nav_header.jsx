import React from 'react'
import UserPanelContainer from './user_panel_container'
import SearchContainer from './search_container'
import {Link} from 'react-router-dom'

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        
        e.preventDefault()
        this.props.removeFilter()
        this.props.history.push('/')
    }

    render() {
        return(
            <div className='nav-header'>
                <Link to='/'>
                    <div onClick={this.handleClick} className='logo-and-title'>
                        <img src={window.logoUrl} alt="trees" className='logo' />
                        <h2 className='logo-title'>Wanderlust </h2>
                        
                    </div>
                </Link>
                <SearchContainer />
                <UserPanelContainer />
            </div>

        )
    }
}

export default NavHeader;