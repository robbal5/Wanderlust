import React from 'react';

class PropertiesImage extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            index: 0,
            photos: this.props.imageUrls
        }

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    }

    moveRight(e) {
        e.preventDefault()
        e.stopPropagation();
        let newIndex = (this.state.index + 1)%this.state.photos.length
        this.setState ({
            index: newIndex
        })
    }

    moveLeft(e) {
        e.preventDefault();
        e.stopPropagation();
        let newIndex = (this.state.index - 1) < 0 ? this.state.photos.length : (this.state.index -1);
        this.setState({
            index: newIndex
        })
    }







    render() {
        
        return (
            <div className='properties-image-container'>
                <button onClick={this.moveLeft} className='properties-image-left-arrow'><span className='arrow'>{'<'}</span></button>
                <img src={this.state.photos[this.state.index]} alt="" className='properties-image' />
                <button onClick={this.moveRight} className='properties-image-right-arrow'><span className='arrow'>{'>'}</span></button>
            </div>
        )
    }
}

export default PropertiesImage;