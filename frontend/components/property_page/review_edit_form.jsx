import React from 'react'
import ReactDOM from 'react-dom'


class ReviewEditForm extends React.Component {
    constructor(props) {
        
        super(props)
        this.state = {
            reviewId:this.props.review.id,
            review: this.props.review.review,
            rating: this.props.review.rating,
            user_id: this.props.userId,
            property_id: this.props.property.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSet = this.handleSet.bind(this);
        this.handleHover = this.handleHover.bind(this)
    }

    componentDidMount() {
        this.handleSet()
    }

    handleSet = e => {
        
        let node = ReactDOM.findDOMNode(this)
        let reviewStars = node.getElementsByClassName('review-star');

        Array.from(reviewStars).forEach((star) => {
            star.style.color =
                this.state.rating >= star.dataset.rating ? 'orange' : 'gray';
        })
    }

    handleHover = e => {
        
        let node = ReactDOM.findDOMNode(this)
        let reviewStars = node.getElementsByClassName('review-star');
        let currentValue = e.target.dataset.rating
        Array.from(reviewStars).forEach(star => {
            star.style.color = currentValue >= star.dataset.rating ? 'orange' : 'gray';
        });

    }

    handleClick = e => {
        
        let rating = e.target.dataset.rating
        this.setState({
            rating: rating
        })
    }

    handleSubmit(e) {

        e.preventDefault()
        this.props.updateReview(this.state)
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
                    <p className='modal-header review-modal-header'>Review of {this.props.property.name}</p>
                    <strong onClick={this.props.closeModal} className="close-x"> <i className='fa fa-times'></i> </strong>
                    <br />
                    <div className='review-rating-stars' >
                        <label className='login-label review-label'>Rating:</label>
                        <div onMouseOut={this.handleSet} className='review-stars-container'>
                            {[...Array(5)].map((n, idx) => {
                                return <i className='review-star fa fa-star'
                                    key={idx + 1}
                                    data-rating={idx + 1}
                                    onClick={this.handleClick}
                                    onMouseOver={this.handleHover}>
                                </i>
                            })}
                        </div>
                        {/* <input type="number" min='1' max='5' value={this.state.rating} onChange={this.update('rating')} className='login-input' /> */}

                    </div>
                    <label className='login-label review-label'>Review:</label>
                    <textarea onChange={this.update('review')} value={this.state.review} className='create-review-text login-input' ></textarea>



                    <input type="submit" className='session-submit review-submit' value='Publish' />
                </form>
            </div>
        )
    }

}


export default ReviewEditForm;