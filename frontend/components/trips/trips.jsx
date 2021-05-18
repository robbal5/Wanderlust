import React from 'react';

class Trips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'upcoming'
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchReservations(this.props.currentUser)
    }

    onClick(field) {
        return e => {
            this.setState({
                view: field
            })
        }
    }
    

    render() {
        let upcoming_class = this.state.view == 'upcoming' ? 'selected' : 'not-selected';
        let past_class = this.state.view == 'past' ? 'selected' : 'not-selected';
        
        return (
            <div className='trips-page'>
                <h1>Trips</h1>
                <nav className='trips-nav'>
                    <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onClick('upcoming')}>Upcoming</button>
                    <button className={`trips-nav-button ${past_class}`} onClick={this.onClick('past')}>Past</button>
                </nav>

            </div>
        )
    }
}

export default Trips;