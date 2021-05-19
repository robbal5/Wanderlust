import React from 'react';
import TripIndex from './trip_index'

class Trips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'upcoming'
        }
        this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchReservations(this.props.currentUser)
    }

    onHeaderClick(field) {
        return e => {
            this.setState({
                view: field
            })
        }
    }


    

    render() {
        
        if (Object.values(this.props.reservations).length < 1){
            return <div>NO TRIPS</div>
        }

        let upcoming_class = this.state.view == 'upcoming' ? 'selected' : 'not-selected';
        let past_class = this.state.view == 'past' ? 'selected' : 'not-selected';
        let filtered_reservations = this.state.view == 'upcoming' ? Object.values(this.props.reservations).filter(res => new Date(res.endDate) > new Date()) :
            Object.values(this.props.reservations).filter(res => new Date(res.endDate) < new Date())
        return (
            <div className='trips-page'>
                <h1>Trips</h1>
                <nav className='trips-nav'>
                    <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                    <button className={`trips-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                </nav>
                <div className='trips-index-container'>
                    {filtered_reservations.map((reservation) => {
                        return <TripIndex reservation = {reservation} property={this.props.properties[reservation.propertyId]} />
                    })}
                </div>

            </div>
        )
    }
}

export default Trips;