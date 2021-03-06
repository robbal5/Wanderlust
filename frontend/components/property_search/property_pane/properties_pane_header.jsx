import React from 'react';

class PropertiesPaneHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: this.props.filters['cityFilter'],
            placeFilter: this.props.filters['placeFilter'],
            cityDropdown: false,
            placeDropdown: false,
        }
        this.onClick = this.onClick.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.onSelection = this.onSelection.bind(this);
        this.clearCityFilter = this.clearCityFilter.bind(this);
        this.clearPlaceFilter = this.clearPlaceFilter.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filters != this.props.filters) {
            this.setState({
                cityFilter: this.props.filters['cityFilter'],
                placeFilter: this.props.filters['placeFilter'],
            })
        }
        if (prevState == this.state) {
            this.setState({
                cityDropdown: false,
                placeDropdown: false
            })
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };   
     }

    onClick(field) {
        
        const that = this;
        return (e) => {

            let newVal = !that.state[field]
            that.setState({
                cityDropdown: false,
                placeDropdown: false,
            })
            that.setState({[field]: newVal}
                // document.addEventListener('click', that.closeClick(field))
            )
            
            e.preventDefault();
            e.stopPropagation();
        }
    }

    // closeClick(field) {
    //     return (e) => {
    //         e.preventDefault();
    //         this.setState({
    //             [field]: false
    //         }, () => {
    //             document.removeEventListener('click', this.closeClick)
    //         })
    //         e.stopPropagation();
    //     }
    // }

    clearCityFilter(e) {
        e.preventDefault();
        this.setState({
            cityFilter: ''
        })
        this.props.updateFilter('cityFilter', '')
    }

    clearPlaceFilter(e) {
        e.preventDefault();
        this.setState({
            placeFilter: ''
        })
        this.props.updateFilter('placeFilter', '')
    }

    clearFilters(e) {
        e.preventDefault();
        this.setState({
            cityFilter: '',
            placeFilter: '',
        })
        this.props.removeFilter()
    }

    onSelection(field, updateFilter) {
        
        return (e) => {
            
            e.preventDefault()
            let search = e.currentTarget.value
            this.setState({
                [field]: search
            })
            
            let city = Object.values(this.props.cities).filter(option => option.name == search)[0]
            if (city) {
                updateFilter('cityFilter', search, 12, city.lat, city.lng)
            } else {
                updateFilter(field, e.currentTarget.value)
            }
            
        }
        
    }

    render() {
        
        const {updateFilter} = this.props

        const cityFilterMenu = () => {
            return (
                <nav className='filter-options'>
                    <button className='filter-option' onClick={this.onSelection('cityFilter', updateFilter)} value='Chicago'>Chicago</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter', updateFilter)} value='Miami'>Miami</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter', updateFilter)} value='New York'>New York</button>
                    <button className='filter-option' onClick={this.onSelection('cityFilter', updateFilter)} value='San Francisco'>San Francisco</button>
                    <button className='filter-option' onClick={this.clearCityFilter} value='Clear'>Clear</button>
                </nav>
            )
        }

        const placeFilterMenu = () => {
            return (
                <nav className='filter-options'>
                    <button className='filter-option' onClick={this.onSelection('placeFilter', updateFilter)} value='Entire place'>Entire place</button>
                    <button className='filter-option' onClick={this.onSelection('placeFilter', updateFilter) } value='Private room'>Private room</button>
                    <button className='filter-option' onClick={this.onSelection('placeFilter', updateFilter) } value='Hotel room'>Hotel room</button>
                    <button className='filter-option' onClick={this.clearPlaceFilter} value='Clear'>Clear</button>
                </nav>
            )
        }
        
        return (
            
                <div className = 'properties-pane-header'>
                <h2 className='properties-pane-header-text'>{this.state.cityFilter === '' ? 'Entire property list' : 'Stays in ' + this.state.cityFilter}</h2>
                    {this.state.cityFilter === '' ? <p className='suggested-searches'>Try searching for New York, San Francisco, Chicago, or Miami</p> : null }
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