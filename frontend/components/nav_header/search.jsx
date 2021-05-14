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
        this.props.updateFilter('cityFilter', this.state.searchValue)
        this.props.history.push('/properties')
        this.setState({
            searchDropdown: false,
            activeCities: [],
            searchValue: ''
        })
    }

    handleClick(e) {
        let clickTarget = e.target.innerText;
        
       this.props.updateFilter('cityFilter', clickTarget)
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
                            placeholder="Start your search..." 
                            value={this.state.searchValue} />
                    <button className='fa fa-search'></button>
                </form>
                {this.state.searchDropdown ? list : null}
            </div>
        )
    }
}

export default Search;