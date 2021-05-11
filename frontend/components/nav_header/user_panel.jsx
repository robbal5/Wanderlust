import React from 'react'

class UserPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const signedIn = () => {
            return (
             <div className='user-panel-signed-in'>
                 <p>Hey {this.props.currentUser.name}</p>
                 <button onClick={this.props.logout}>Logout</button>
                 <button>More info</button>
             </div>
            )
        }

        const noUser = () => {
            return (
                <nav className='login-signup'>
                    <button className='user-panel-button' onClick={() => this.props.openModal('login')}>Log in</button>
                    <button className='user-panel-button' onClick={() => this.props.openModal('signup')}>Sign Up</button>
                </nav>
            )
        }
        
        return (
            <div className='user-panel'>
                {this.props.currentUser ? signedIn() : noUser()}
            </div>
        )
    }
}

export default UserPanel;