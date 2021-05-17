import React from 'react'
import {withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            date_of_birth: '',
            phone_number: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
                    return <li className='modal-errors' key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    handleDemo(e) {
        this.setState({email: 'DemoUser@gmail.com', password: 'Demouser'})
    }

    render() {
        
        return(
            <div>
                <form className='main-modal' onSubmit={this.handleSubmit}>
                    <p className='modal-header'>{this.props.formType[0].toUpperCase() + this.props.formType.slice(1)} </p>
                    
                    <strong onClick={this.props.closeModal} className="close-x"> <i className='fa fa-times'></i> </strong>
                    <br />
                    {this.renderErrors()}
                    <div className='login-section'>
                        <br />
                        {this.props.formType == 'signup' ? <label className='login-label'>Name:
                            <input type="text" value={this.state.name}  onChange={this.update('name')} className='login-input' />
                        </label> : null }
                       
                        <br />
                        <label className='login-label'>Email:
                            <input type="email" value={this.state.email}  onChange={this.update('email')} className='login-input' />
                        </label>
                        <br />
                        <label className='login-label'>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' />
                        </label>
                        <br />
                        {this.props.formType == 'signup' ? <div>
                            <h6 className='modal-optional-text'>Let us know more about you!</h6>
                            <label className='login-label'>Phone Number:
                                <input type="tel" value={this.state.phone_number} onChange={this.update('phone_number')} className='login-input' />
                            </label>
                            <br />
                            <label className='login-label'>Date of Birth:
                                <input type="date" value={this.state.date_of_birth} onChange={this.update('date_of_birth')} className='login-input' />
                            </label>
                        </div> : null}
                        
                        
                        <input type="submit" className="session-submit" value={this.props.formType[0].toUpperCase() + this.props.formType.slice(1)} />
                        {this.props.formType == 'login' ? <button className='session-submit' onClick={this.handleDemo}>Demo User</button> : null}
                        {this.props.formType == 'signup' ? <p className='modal-bottom-text'>Already have an account? <span>{this.props.otherForm}</span></p>
                            : <p className='modal-bottom-text'>Don't have an account? <span>{this.props.otherForm}</span></p> }
                        
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)