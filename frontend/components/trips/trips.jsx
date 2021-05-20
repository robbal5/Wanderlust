import React from 'react';
import TripIndex from './trip_index'
import {withRouter} from 'react-router'

class Trips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'upcoming'
        }
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
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

    onButtonClick(e) {
        this.props.history.push('/properties')
        this.setState({state : this.state})
    }


    

    render() {
        
       
        
        let upcoming_class = this.state.view == 'upcoming' ? 'selected' : 'not-selected';
        let past_class = this.state.view == 'past' ? 'selected' : 'not-selected';
        let filtered_reservations = this.state.view == 'upcoming' ? Object.values(this.props.reservations).filter(res => new Date(res.endDate) > new Date()) :
            Object.values(this.props.reservations).filter(res => new Date(res.endDate) < new Date())

        if (Object.values(this.props.reservations).length < 1) {
            return (
                <div className='trips-page'>
                    <nav className='trips-header-nav'>
                        <h1>Trips</h1>
                        <button onClick={this.onButtonClick} className='trips-header-nav-button'>Explore Wanderlust</button>
                    </nav>
                    <nav className='trips-nav'>
                        <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                        <button className={`trips-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                    </nav>
                    <p className='no-trips-text'>No trips planned yet!</p>
                </div>
            )
        }
        return (
            <div className='trips-page'>
                <nav className='trips-header-nav'>
                    <h1>Trips</h1>
                    <button onClick={this.onButtonClick} className='trips-header-nav-button'>Explore Wanderlust</button>
                </nav>
                <nav className='trips-nav'>
                    <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                    <button className={`trips-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                </nav>
                <div className='trips-index-container'>
                    {filtered_reservations.map((reservation, idx) => {
                        return <TripIndex status={this.state.view} removeReservation={this.props.removeReservation} key={reservation.id} reservation = {reservation} property={this.props.properties[reservation.propertyId]} />
                    })}
                </div>

            </div>
        )
    }
}

export default withRouter(Trips);