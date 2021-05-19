import React from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

class UserPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false,
        }
        this.showDropdown = this.showDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.getReservations = this.getReservations.bind(this)
    }

    showDropdown(e) {
        
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

    getReservations(e) {
        
        e.preventDefault();
        this.props.fetchReservations(this.props.currentUser.id)
        this.props.history.push('/trips')
    }
    render() {
        
        const signedIn = () => {
            return (
                <div>
                    
                    <div className='user-panel-options'>
                        <Link to="/"> <button className='user-panel-button' onClick={this.props.logout}>Logout</button></Link>
                        <button className='user-panel-button' onClick={this.getReservations}>Reservations</button>
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

export default withRouter(UserPanel);