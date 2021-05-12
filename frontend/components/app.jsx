import React from 'react'
import {Route, Switch, Link, Redirect, HashRouter} from 'react-router-dom'
import NavHeader from './nav_header/nav_header'
import Footer from './footer/footer'
import ModalContainer from './modal/modal_container'
import Home from './home/home'

const App = () => {
    return (
        <div>
            <ModalContainer />
            <NavHeader />
            <Switch>
                <Route path='/' component={Home}></Route>
                
            </Switch>
            <Footer />
        </div>
    )
}

export default App;

