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
            guests: 1
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDisable = this.handleDisable.bind(this);
    }

    handleSelect(e) {
        console.log(e)
        this.setState({
            startDate: e.selection.startDate,
            endDate: e.selection.endDate
        })
        
    }

    handleSubmit(e) {
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
            this.props.history.push('/trips')
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

    render() {
        
            let disabledDates = [];
            if (this.props.reservations){
            Object.values(this.props.reservations).forEach (reservation => {
                
                let start = reservation.startDate;
                let end = reservation.endDate;
                disabledDates = disabledDates.concat(this.dateRange(start, end))
            })
        }  
        
            debugger;
            const initialState = (this.state.startDate == this.state.endDate)
            const currDate = new Date()
            const selectionRange = {
                startDate: this.state.startDate, 
                endDate: this.state.endDate,
                key: 'selection',
            }
            const { startDate, endDate } = this.state;

    return (
        <div className='reservation-container'>
            <h1 className='create-reservation-header'>Book a stay today!</h1>
            <form onSubmit={this.handleSubmit} className='property-reservation-form'>
                <label className='property-reservation-input-label'>Number of guests:
                        <select onChange={this.changeGuest} className='reservation-number-of-guests-select'>
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
                <label className='property-reservation-input-label'>
                    <input className='property-reservation-submit' type="submit" value='Book Today!' disabled={endDate==startDate ? true : false} />
                </label>
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


export default withRouter(ReservationCalendar);