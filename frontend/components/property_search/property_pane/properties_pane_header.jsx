import React from 'react';

class PropertiesPaneHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: '',
            placeFilter: ''
        }
    }

    render() {
        return (
                <div className = 'properties-pane-header'>
                    <h2 className = 'properties-pane-header-text'> Stays in CITY NAME</h2> 
                    <form className='properties-pane-header-filter-form'>
                   
                        <div className='filter-buttons'>
                            <button className='filter-button'>City</button>
                            <button className='filter-button'>Type of place</button>
                            <button className='filter-button'>Clear filters</button>
                        </div>
                    </form>
                </div >
                
           
        )
    }
}

export default PropertiesPaneHeader;