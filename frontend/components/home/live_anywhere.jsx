import React from 'react'

class LiveAnywhere extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='live-anywhere'>
                <h2 className='live-anywhere-header'>Live anywhere</h2>
                <div className='live-anywhere-section'>
                    <div className='live-anywhere-container'>
                        <img className='live-anywhere-image' src={window.cabin} alt="cabin" />
                        <p className='live-anywhere-text'>Unique visits</p>
                    </div>
                    <div className='live-anywhere-container'>
                        <img className='live-anywhere-image' src={window.home} alt="home" />
                        <p className='live-anywhere-text'>Stunning views</p>
                    </div>
                    {/* <div className='live-anywhere-container'>
                        <img className='live-anywhere-image' src={window.hut} alt="hut" />
                        <p className='live-anywhere-text'>Unforgettable experiences</p>
                    </div> */}
                    <div className='live-anywhere-container'>
                        <img className='live-anywhere-image' src={window.dog} alt="dog" />
                        <p className='live-anywhere-text'>Pet friendly</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default LiveAnywhere;