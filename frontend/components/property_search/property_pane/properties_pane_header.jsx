import React from 'react';

class PropertiesPaneHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: '',
            placeFilter: '',
            cityDropdown: false,
            placeDropdown: false,
        }

        this.clearFilters = this.clearFilters.bind(this)
    }

    onClick(field) {
        return (e) => {
            this.setState({
                cityDropdown: false,
                placeDropdown: false,
            })
            e.preventDefault;
            this.setState({[field]: true},
            document.addEventListener('click', this.closeClick(field))
            )
            e.stopPropagation()
        }
    }

    closeClick(field) {
        return (e) => {
            e.preventDefault;
            this.setState({
                [field]: false
            }, () => {
                document.removeEventListener('click', this.closeClick)
            })
        }
    }

    clearFilters(e) {
        e.preventDefault;
        this.setState({
            cityFilter: '',
            placeFilter: '',
        })
    }

    onSelection(field) {
        return (e) => {
            
            e.preventDefault()
            this.setState({
                [field]: e.currentTarget.value
            })
        }
        
    }

    render() {

        const cityFilterMenu = () => {
            return (
                <nav className='filter-options'>
                    <button className='filter-option' onClick={this.onSelection('cityFilter')} value='Chicago'>Chicago</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter')} value='Miami'>Miami</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter')} value='New York'>New York</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter')} value='San Francisco'>San Francisco</button>
                </nav>
            )
        }

        const placeFilterMenu = () => {
            return (
                <nav className='filter-options'>
                    <button className='filter-option' onClick={this.onSelection('placeFilter')} value='Entire place'>Entire place</button>
                    <button className='filter-option' onClick={this.onSelection('placeFilter')} value='Private room'>Private room</button>
                    <button className='filter-option' onClick={this.onSelection('placeFilter')} value='Hotel room'>Hotel room</button>
                </nav>
            )
        }
        
        return (
            
                <div className = 'properties-pane-header'>
                <h2 className='properties-pane-header-text'>{this.state.cityFilter === '' ? 'Entire property list' : 'Stays in ' + this.state.cityFilter}</h2>
                    <form className='properties-pane-header-filter-form'>
                   
                        <div className='filter-buttons'>
                            <div className='city-filter'>
                            <button className='filter-button' onClick={this.onClick('cityDropdown')} >{this.state.cityFilter === '' ? 'City' : this.state.cityFilter}</button>
                                {this.state.cityDropdown ? cityFilterMenu() : null}
                            </div>
                            <div className='place-filter'>
                            <button className='filter-button' onClick={this.onClick('placeDropdown')}>{this.state.placeFilter === '' ? 'Type of place' : this.state.placeFilter}</button>
                                {this.state.placeDropdown ? placeFilterMenu() : null}
                            </div>
                            <button className='filter-button' onClick={this.clearFilters}>Clear filters</button>
                        </div>
                    </form>
                </div >
                
           
        )
    }
}

export default PropertiesPaneHeader;