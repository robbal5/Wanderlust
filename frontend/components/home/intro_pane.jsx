import React from 'react'


class IntroPane extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className='intro-pane'>
            <h2 className='intro-image-text'>Find your next adventure...</h2>
            <button className='intro-image-button'>Get inspired</button>
            <img src={window.introUrl} alt="forest" className='intro-image' />
        </div>
        )
    }
}

export default IntroPane;