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
                    return <li key={idx}>{error}</li>
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
                    {this.props.formType[0].toUpperCase() + this.props.formType.slice(1)} 
                    <br />
                    <span onClick={this.props.closeModal} className="close-x"> X </span>
                    {this.renderErrors()}
                    <div className='login-section'>
                        <br />
                        {this.props.formType == 'signup' ? <label>Name:
                            <input type="text" value={this.state.name} placeholder="John Smith" onChange={this.update('name')} className='login-input' />
                        </label> : null }
                       
                        <br />
                        <label>Email:
                            <input type="email" value={this.state.email} placeholder="Jsmith@gmail.com" onChange={this.update('email')} className='login-input' />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input' />
                        </label>
                        <br />
                        {this.props.formType == 'signup' ? <div>
                            <h6>Optional</h6>
                            <label>Phone Number:
                                <input type="tel" value={this.state.phone_number} onChange={this.update('phone_number')} className='login-input' />
                            </label>
                            <br />
                            <label>Date of Birth:
                                <input type="date" value={this.state.date_of_birth} onChange={this.update('date_of_birth')} className='login-input' />
                            </label>
                        </div> : null}
                        
                        
                        <input type="submit" className="session-submit" value={this.props.formType[0].toUpperCase() + this.props.formType.slice(1)} />
                        {this.props.formType == 'login' ? <button onClick={this.handleDemo}>Demo User</button> : null}
                        {this.props.formType == 'signup' ? <p>Already have an account? {this.props.otherForm}</p> 
                            : <p>Don't have an account? {this.props.otherForm}</p> }
                        
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)