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
        this.onClick = this.onClick.bind(this);
    }

    showDropdown(e) {
        
        e.preventDefault();
        this.setState({
            showDropdown: !this.state.showDropdown
        }, document.addEventListener('click', this.closeDropdown) )
        e.stopPropagation()
    }

    closeDropdown(e) {
        e.preventDefault();
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

    onClick(e) {
        
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }
    render() {
        
        const signedIn = () => {
            return (
                <div>
                    
                    <div className='user-panel-options'>
                         <button className='user-panel-button' onClick={this.onClick}>Logout</button>
                        <button className='user-panel-button' onClick={this.getReservations}>Reservations</button>
                    </div>
                </div>
            )
        }

        const noUser = () => {
            return (
                <div>
                    <div className='user-panel-options'>
                        <button className='user-panel-button' onClick={() => this.props.openModal('login')}>Log in</button>
                        <button className='user-panel-button' onClick={() => this.props.openModal('signup')}>Sign up</button>
                    </div>
                </div>
            )
        }
        
        return (
            <div className='nav-utility'>
                
                {/* <p className='user-panel-name'>{this.props.currentUser ? `Good to see you, ${this.props.currentUser.name.split(' ')[0]}` : ''}</p> */}
                <div className='user-panel'>
                    <a target='_blank' href="https://www.linkedin.com/in/robert-s-balistreri/"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a target='_blank' href="https://github.com/robbal5/Wanderlust"><i className="fab fa-github fa-2x"></i></a>
                    <button className={this.props.currentUser ? 'fas fa-user-alt colored' : 'fas fa-user-alt'} onClick={this.showDropdown}></button>
            
                </div>
                {this.state.showDropdown ? (this.props.currentUser ? signedIn() : noUser()) : null}
            </div>
        )
    }
}

export default withRouter(UserPanel);