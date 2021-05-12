import React from 'react'

class DiscoverExperiences extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='discover-experiences-section'>
                <h2 className='discover-experiences-header'>Discover experiences</h2>
                <img className='discover-experiences-image' src={window.experience} alt="cabin" />
            </div>
            )
    }
}

export default DiscoverExperiences;