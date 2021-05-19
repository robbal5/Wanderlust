import React from 'react';
import {withRouter} from 'react-router';

class TripIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(this.props.reservation.startDate),
            endDate: new Date(this.props.reservation.endDate)
        }
        this.onClick = this.onClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onClick() {
        this.props.history.push(`/properties/${this.props.property.id}`)
    }

    handleDelete(e) {
        this.props.removeReservation(this.props.reservation)
        e.stopPropagation()
    }

    render() {
        const {startDate, endDate} = this.state;
        let startDateString = (startDate.getMonth() + 1).toString() + '/' + startDate.getDate().toString() + '/' + startDate.getFullYear();
        let endDateString = (endDate.getMonth() + 1).toString() + '/' + endDate.getDate().toString() + '/' + endDate.getFullYear();
        const {property, reservation} = this.props
        
        return (
            
                <div onClick={this.onClick} className='trip-container'>
                    <div className='trip-selection'>
                        <img src={property.photoUrls[0]} />
                        <h1>{property.name}</h1>
                        <div className='trip-container-subs'>
                            <p>{startDateString} - {endDateString}</p>
                            <p>{reservation.guests ? reservation.guests + (reservation.guests > 1 ? ' guests': ' guest') : 'No guest restriction'}</p>
                        </div>
                    </div>
                    <button className='trip-index-delete' onClick={this.handleDelete}>Delete</button>
                </div>
            
        )
    }
}

export default withRouter(TripIndex);