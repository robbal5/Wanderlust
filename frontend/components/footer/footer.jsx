import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <p className='footer-name'>Designed by Robby Balistreri
                        <a href=""><i class="fa fa-acorn" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;