import React from 'react'

class UserPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false,
        }
        this.showDropdown = this.showDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    }

    showDropdown(e) {
        debugger;
        e.preventDefault;
        this.setState({
            showDropdown: true
        }, document.addEventListener('click', this.closeDropdown) )
        e.stopPropagation()
    }

    closeDropdown(e) {
        e.preventDefault;
        this.setState({
            showDropdown: false
        }, () => {
            document.removeEventListener('click', this.closeDropdown)
        })
    }

    render() {
        debugger;
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
                    <button className='user-panel-button' onClick={() => this.props.openModal('signup')}>Sign up</button>
                </nav>
            )
        }
        
        return (
            <div className='nav-utility'>
                
                <p className='user-panel-name'>{this.props.currentUser ? `Good to see you, ${this.props.currentUser.name.split(' ')[0]}` : ''}</p>
                <div className='user-panel'>
                    <button className='fas fa-user-alt' onClick={this.showDropdown}></button>
                    {this.state.showDropdown ? (this.props.currentUser ? signedIn() : noUser()) : null}              
                    
                </div>
            </div>
        )
    }
}

export default UserPanel;