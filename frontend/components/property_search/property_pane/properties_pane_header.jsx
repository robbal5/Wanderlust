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
                    <h2 className = 'properties-pane-header-header'> Stays in the selected map area</h2>
                    <form className='properties-pane-header-filter-form'>
                        <button>City</button>
                    </form>
                </div >
                
           
        )
    }
}

export default PropertiesPaneHeader;