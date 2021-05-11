import React from 'react'

class UserPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const signedIn = () => {
            return (
                <div>
                    
                    <div className='user-panel-options'>
                        <button className='user-panel-button' onClick={this.props.logout}>Logout</button>
                        <button className='user-pane-button'>More info</button>
                    </div>
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
            <div className='nav-utility'>
                
                <p className='user-panel-name'>{this.props.currentUser ? `Good to see you, ${this.props.currentUser.name.split(' ')[0]}` : ''}</p>
                <div className='user-panel'>
                    <button className='fas fa-user-alt'></button>

                    {this.props.currentUser ? signedIn() : noUser()}
                    
                </div>
            </div>
        )
    }
}

export default UserPanel;