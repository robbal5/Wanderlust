import React from 'react';
import Calendar from 'react-calendar'

class PropertyCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            startDate: null,
            endDate: null,
            duration: null,
            guests: 1
        }
        this.onDayClick = this.onDayClick.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //new Date(year, month, day) Numbers

    onSubmit(e) {
        debugger;
        e.preventDefault()
        let reservation = {
            property_id: this.props.property.id,
                user_id: this.props.currentUser,
                start_date: this.state.startDate,
                end_date: this.state.endDate
        }

    }
    onDayClick(value, e) {
        
        const year = value.getFullYear();
        const month = value.getMonth();
        const day = value.getDate();
        const date = new Date(year, month, day)
        if(this.state.startDate > date) {
            this.setState({
                startDate: date,
                endDate: null
            })
        }
       else if (this.state.startDate){
            this.setState({
                endDate: date
            })
        }
        else {
            this.setState({
                startDate: date
            })
        }
        ;
    }

    handleDisable = (e) => {
       
        const reservations =Object.values(this.props.reservations);
        let disabled = false;
        for (let i = 0; i<reservations.length; i++) {
            let res = reservations[i];
            const startResDate = new Date(res.startDate);
            const endResDate = new Date(res.endDate);
            if (startResDate < e.date && endResDate > e.date) {
                disabled = true;
                break;
            }
        }
        if (e.date < new Date()) {
            disabled = true;
        }
        return disabled;
    }

    render() {
        const {startDate, endDate} = this.state;
         return(
            <div className='property-reservation-container'>
                <form onSubmit={this.onSubmit} className='property-reservation-form'>
                    <label className='property-reservation-input-label'>Number of guests:
                        <select className='reservation-number-of-guests-select'>
                            {[1,2,3,4,5,6,7,8].map(i => {
                                return <option value="i">{i}</option>
                            })}
                        </select>
                    </label>
                    <label className='property-reservation-input-label'>Start date:
                        <input disabled type="text" value={startDate ? `${startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()} ` : ''} />
                    </label>
                    <label className='property-reservation-input-label'>End date:
                        <input disabled type="text" value={endDate ? `${endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()} ` : ''} />
                    </label>
                    <input className='property-reservation-submit' type="submit" value='Create Reservation!' disabled = {endDate ? false : true} />
                </form>
                <div className='property-calendar-container'>
                    <Calendar onClickDay={this.onDayClick}
                            tileDisabled={this.handleDisable}
                            tileClassName='tile-class'/>
                </div>
            </div>
        )
    }
}

export default PropertyCalendar;