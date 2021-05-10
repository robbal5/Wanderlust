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
                 <button>More info</button>
             </div>
            )
        }

        const noUser = () => {
            return (
                <ul className='user-panel-sign-in'>
                    <li className='user-panel-button'>Log in</li>
                    <li className='user-panel-button'>Sign Up</li>
                </ul>
            )
        }
        
        return (
           this.props.currentUser ? signedIn() : noUser()
        )
    }
}

export default UserPanel;