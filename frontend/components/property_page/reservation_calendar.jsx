import React from 'react';
import {DateRange} from 'react-date-range'
import { withRouter } from 'react-router'

class ReservationCalendar extends React.Component {
    constructor(props) {
        const currDate = new Date()
        super(props)
        this.state = {
            startDate: currDate,
            endDate: currDate,
            guests: 1,
            created: false,
            booking: false,
            duration: 0
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeGuest = this.changeGuest.bind(this);
        this.bookingMenu = this.bookingMenu.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleSelect(e) {
        const {startDate, endDate} = e.selection
        const timeDiff = Math.abs(endDate - startDate)
        const dayDiff = Math.ceil(timeDiff / (24*60*60*1000))
        this.setState({
            startDate: startDate,
            endDate: endDate,
            duration: dayDiff
        })
        debugger;
    }

    changeGuest(e) {
        this.setState({
            guests: parseInt(e.target.value)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            booking: true
        })
    }

    handleConfirm(e) {
        if (this.props.currentUser) {
            e.preventDefault()
            let reservation = {
                property_id: this.props.property.id,
                user_id: this.props.currentUser,
                start_date: this.state.startDate,
                end_date: this.state.endDate,
                guests: this.state.guests
            }

            this.props.createReservation(reservation);
            // this.props.history.push('/trips')
            const currDate = new Date()
            this.setState({
                startDate: currDate,
                endDate: currDate,
                created: true,
                guests: 1
            })
        } else {
            e.stopPropagation();
            this.props.openModal('login')
        }

    }

    dateRange(d1, d2) {
        
        let firstDate = new Date(d1);
        let secondDate = new Date(d2);
        let firstDateValue = firstDate.getDate() - 1;
        let midValue1 = firstDate.setDate(firstDateValue)
        firstDate = new Date(midValue1)
        let dates = [];
        while (firstDate < secondDate) {
            dates.push(firstDate)
            let nextDay = firstDate.getDate() + 1
            let midValue2 = firstDate.setDate(nextDay)
            firstDate = new Date(midValue2)
        }
        return dates; 
    }

    bookingMenu() {
        const {startDate, endDate, guests,duration} = this.state;
        if (this.state.booking) {
            return (
                <div className='booking-menu'>
                    <p>${this.props.property.price} / night</p>
                    <div className='booking-details'>
                        <div className='booking-dates'>
                            <div className='booking-check-in-date'>
                                <label>Check-in 
                                    <p>{startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()}</p>
                                </label>
                            </div>
                            <div className='booking-check-out-date'>
                                <label>Check-out
                                    <p>{endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()}</p>
                                </label>
                            </div>
                        </div>
                        <div className='booking-guests'>
                            <label>Guests
                                <p>{guests} + {guests > 1 ? ' guests' : ' guest'}</p>
                            </label>
                        </div>

                        <button onClick={this.handleConfirm} className='booking-menu-reserve-button'>Reserve</button>
                        <div className='booking-pricing'>
                            <div>
                                <p>${this.props.property.price} x {duration} nights</p>
                                <p>${parseInt(this.props.property.price)*parseInt(duration)}</p>
                            </div>
                            <div>
                                <p>Cleaning fee</p>
                                <p>$10</p>
                            </div>
                            <div>
                                <p>Service fee</p>
                                <p>$20</p>
                            </div>
                            <div className='pricing-total'>
                                <p>Total</p>
                                <p>${10 + 20 + parseInt(this.props.property.price)*parseInt(duration)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }

    render() {
        
            let disabledDates = [];
            if (this.props.reservations){
            Object.values(this.props.reservations).forEach (reservation => {
                
                let start = reservation.startDate;
                let end = reservation.endDate;
                disabledDates = disabledDates.concat(this.dateRange(start, end))
            })
        }  
        
            
            const initialState = (this.state.startDate == this.state.endDate)
            const currDate = new Date()
            const selectionRange = {
                startDate: this.state.startDate, 
                endDate: this.state.endDate,
                key: 'selection',
            }
            const { startDate, endDate } = this.state;


    if (this.state.booking){
        return(
            this.bookingMenu()
        )
    } else {
        return (
            <div className='reservation-container'>
                <h1 className='create-reservation-header'>Book a stay today!</h1>
                <form onSubmit={this.handleSubmit} className='property-reservation-form'>
                    <label className='property-reservation-input-label'>Number of guests:
                            <select onChange={this.changeGuest} className='reservation-number-of-guests-select' value={this.state.guests}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                                return <option key={i} value={i}>{i}</option>
                            })}
                        </select>
                    </label>
                    <label className='property-reservation-input-label'>Check-in date:
                            <input disabled type="text" value={!initialState ? `${startDate.getMonth()}/${startDate.getDate()}/${startDate.getFullYear()} ` : ''} />
                    </label>
                    <label className='property-reservation-input-label'>Check-out date:
                            <input disabled type="text" value={!initialState ? `${endDate.getMonth()}/${endDate.getDate()}/${endDate.getFullYear()} ` : ''} />
                    </label>
                    <label className='property-reservation-input-label'>Duration: 
                        <p>{this.state.duration} Days</p>
                    </label>
                    <label className='property-reservation-input-label'>
                        <input className='property-reservation-submit' type="submit" value='Book Today!' disabled={endDate==startDate ? true : false} />
                    </label>
                    {this.state.created ? <p className='booking-confirmation'>Your booking has been confirmed, we can't wait to see you!</p> : null }
                </form>
                <DateRange
                    ranges={[selectionRange]}
                    onChange={this.handleSelect}
                    editableDateInputs={true}
                    showSelectionPreview={true}
                    direction='horizontal'
                    months={2}
                    showDateDisplay={false}
                    showMonthAndYearPickers={false}
                    minDate={new Date()}
                    shownDate={new Date(currDate.setMonth(currDate.getMonth() + 1))}
                    rangeColor={['purple']}
                    disabledDates={disabledDates}
                    // disabledDay={this.handleDisable}
                    // focusedRange={[this.state.startDate, this.state.endDate]}

                    
                />
            </div>
            )
        }
    }
        
    }


export default withRouter(ReservationCalendar);