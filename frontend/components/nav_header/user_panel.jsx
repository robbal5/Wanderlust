import React from 'react'

class UserPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const signedIn = () => {
            return (
             <div className='user-panel-options'>
                 <p className='user-panel-name'>Hey {this.props.currentUser.name}</p>
                 <button className='user-panel-button' onClick={this.props.logout}>Logout</button>
                 <button className='user-pane-button'>More info</button>
             </div>
            )
        }

        const noUser = () => {
            return (
                <nav className='user-panel-options'>
                    <button className='user-panel-button' onClick={() => this.props.openModal('login')}>Log in</button>
                    <button className='user-panel-button' onClick={() => this.props.openModal('signup')}>Sign Up</button>
                </nav>
            )
        }
        
        return (
            <div className='user-panel'>
                <button className='fas fa-user-alt'></button>

                {this.props.currentUser ? signedIn() : noUser()}
                
            </div>
        )
    }
}

export default UserPanel;