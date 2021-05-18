import React from 'react';
import Calendar from 'react-calendar'

class PropertyCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            startDate: '',
            endDate: '',
            duration: '',
            guests: 1
        }
        this.onDayClick = this.onDayClick.bind(this);
    }

    onDayClick(value, e) {
        this.setState({
            startDate: value
        })
    }

    render() {
        return(
            <div className='property-reservation-container'>
                <form className='property-reservation-form'>
                    <label className='property-reservation-input-label'>Number of guests:
                        <select className='reservation-number-of-guests-select'>
                            {[1,2,3,4,5,6,7,8].map(i => {
                                return <option value="i">{i}</option>
                            })}
                        </select>
                    </label>
                    <label className='property-reservation-input-label'>Start date:
                        <input disabled type="text" value={this.state.startDate} />
                    </label>
                    <label className='property-reservation-input-label'>End date:
                        <input disabled type="text" value={this.state.endDate } />
                    </label>
                </form>
                <div className='property-calendar-container'>
                    <Calendar onClickDay={this.onDayClick} />
                </div>
            </div>
        )
    }
}

export default PropertyCalendar;