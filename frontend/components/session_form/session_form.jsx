import React from 'react'
import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
        .then(this.props.closeModal)
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    render() {
        return(
            <div>
                <form className='main-modal' onSubmit={this.handleSubmit}>
                    Welcome to Wanderlust 
                    <br />
                    Please {this.props.formType} or {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x"> X </div>
                    {this.renderErrors()}
                    <div className='login-section'>
                        <br />
                        {this.props.formType == 'signup' ? <label>Name:
                            <input type="text" value={this.state.name} onChange={this.update('name')} className='login-input' />
                        </label> : null }
                       
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className='login-input' />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' />
                        </label>
                        <br />
                        <input type="submit" className="session-submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)