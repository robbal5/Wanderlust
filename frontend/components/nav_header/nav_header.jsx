import React from 'react'
import UserPanelContainer from './user_panel_container'
import SearchContainer from './search_container'
import {Link} from 'react-router-dom'

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='nav-header'>
                <div className='logo-and-title'>
                    <img src={window.logoUrl} alt="trees" className='logo' />
                    <h3 className='logo-title'>Wanderlust </h3>
                    
                </div>
                <SearchContainer />
                <UserPanelContainer />
            </div>

        )
    }
}

export default NavHeader;