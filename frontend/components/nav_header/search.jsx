import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.requestCities();
        this.props.requestStates();
    }

    render() {
        return (
            <div className='search-bar'>
                <form className='search-form' action="">
                    
                    <input className="search-input" type="text" placeholder="Start your search..." />
                    <button className='fa fa-search'></button>
                </form>
            </div>
        )
    }
}

export default Search;