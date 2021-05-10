import React from 'react'
import UserPanelContainer from './user_panel_container'
import SearchContainer from './search_container'

class NavHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            <h2>PlaceHolder for Nav header </h2>
            <SearchContainer />
            <UserPanelContainer />
            </div>

        )
    }
}

export default NavHeader;