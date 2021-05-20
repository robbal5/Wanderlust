import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchDropdown: false,
            activeCities: [],
            searchValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.requestCities();
        this.props.requestStates();
    }

    handleSubmit(e) {
        
        e.preventDefault();
        let search = this.state.searchValue
        
        search  = search.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
        let cities = Object.values(this.props.cities).filter(city => city.name.startsWith(search))
        // let city = Object.values(this.props.cities).filter(option => option.name == search)[0]
        let city = null
        if (cities.length > 0){
            city = cities[0]
            search = city.name
        }
        if (!city) {
            this.props.updateFilter('cityFilter', search)
        } else {
            this.props.updateFilter('cityFilter', search, 12, city.lat, city.lng)
        }
        this.props.history.push('/properties')
        this.setState({
            searchDropdown: false,
            activeCities: [],
            searchValue: ''
        })
    }

    
    handleClick(e) {
        
        let clickTarget = e.target.innerText;
        let city = Object.values(this.props.cities).filter(option => option.name == clickTarget)[0]
        this.props.updateFilter('cityFilter', clickTarget, 12, city.lat, city.lng)
        this.props.history.push('/properties')
        this.setState({
            searchDropdown: false,
            activeCities: [],
            searchValue: ''
        })
    }

    handleChange = e => {
        
        const typeValue = e.currentTarget.value;
        if (typeValue == '') {
            this.setState({
                searchDropdown: false,
                activeCities: [],
                searchValue: ''
            })
        } else {
            let cityNames = Object.values(this.props.cities).map(city => city.name.toLowerCase()).filter(name => name.startsWith(typeValue.toLowerCase()))
            cityNames = cityNames.map(name => name.split(' ').map(part => part[0].toUpperCase() + part.slice(1)).join(' '))
            
            this.setState({
                searchDropdown: true,
                activeCities: cityNames,
                searchValue: typeValue
            })
        }
    }

    render() {
        
        const list = <ul className='search-dropdown'>
            {this.state.activeCities.map((city, idx) => {
                return <li onClick={this.handleClick} key={idx}>{city}</li>
            })}
        </ul>

        return (
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit} className='search-form' action="">
                    
                    <input onChange={this.handleChange} 
                            className="search-input" 
                            type="text" 
                            placeholder="Find a city you'll love..." 
                            value={this.state.searchValue} />
                    <button className='fa fa-search'></button>
                </form>
                {this.state.searchDropdown ? list : null}
            </div>
        )
    }
}

export default Search;