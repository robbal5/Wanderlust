import React from 'react';
import PropertyReviewsIndexItem from './property_reviews_index_item'
class PropertyReviewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: props.reviews
        }
        
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (prevProps.reviews != this.props.reviews) {
            this.setState( {
                reviews: this.props.reviews
            })
        }
    }

    render() {
        debugger;
        const{reviews} = this.state;
        let total = 0;
        Object.values(reviews).forEach(rev => total += rev.rating)
        let number = Object.values(reviews).length
        let average = (total/number).toFixed(2)
        return (
            <div>
                <div className='property-reviews-header-container'>
                    <div>
                        <h2 className='property-reviews-header'>Reviews</h2>
                        <div>
                            <p>{number} reviews | <i className='fa fa-star review-stars'></i> {average} </p>
                        </div>
                    </div>
                    <button className='create-review-button' onClick={ this.props.currentUser ? () => this.props.openModal('review') : () => this.props.openModal('login')}>Write a review</button>
                </div>
                <ul className='property-reviews-list'>
                    {Object.values(reviews).slice(0,8).map((review,idx) => {
                        return <PropertyReviewsIndexItem key={review.id} review={review} currentUser={this.props.currentUser} />
                    })}
                </ul>
            </div>
        )
    }
}

export default PropertyReviewsIndex;