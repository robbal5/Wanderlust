import React from 'react';
import IntroPane from './intro_pane';
import HomeResources from './home_resources'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>HOME
                <IntroPane />
                <HomeResources />
            </div>
        )
    }


}


export default Home;