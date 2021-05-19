import React from 'react';

class PropertyReviewsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        
        const {review} = this.props
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const year = review.createdAt.split('-')[0];
        const month = months[parseInt(review.createdAt.split('-')[1])-1]
        const rating = []
        for (let i = 0; i<review.rating; i++) {
            rating.push(i)
        }
        return (
            <li className='property-review'>
                <div className='review-header'>
                    <h3 className='review-writer'><i className="fas fa-user-circle"> </i>{'   ' + review.name}</h3>
                    {this.props.currentUser == review.userId ? <p className='review-edit'>Edit</p> : null}
                </div>
                <p className='review-date'>{month} {year}</p>
                <p className='review-stars'>
                    {rating.map(x => <i key={x} className='fa fa-star'></i>)}
                </p>
                <p className='review-text'>{review.review}</p>
            </li>
        )
    }
}

export default PropertyReviewsIndexItem;