import React from 'react'
import { withRouter } from 'react-router-dom'


class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: '',
            rating: '',
            user_id: this.props.userId,
            property_id: this.props.property.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        
        e.preventDefault()
        this.props.createReview(this.state)
        this.props.closeModal()
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
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

    render() {
        
        return (
            <div>
                <form className='main-modal login-section' onSubmit={this.handleSubmit}>
                    <p className='modal-header'>Review of {this.props.property.name}</p>
                    <strong onClick={this.props.closeModal} className="close-x"> <i className='fa fa-times'></i> </strong>
                    <br />
                    <label className='login-label'>Review:
                        <textarea onChange={this.update('review')} value={this.state.review} className='create-review-text' ></textarea>
                    </label>
                    <label className='login-label'>Rating:
                            <input type="number" min='1' max='5' value={this.state.rating} onChange={this.update('rating')} className='login-input' />
                    </label>

                    <input type="submit" className='session-submit' value='Create' />
                </form>
            </div>
        )
    }

}


export default ReviewForm;