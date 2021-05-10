import React from 'react'
import {Route, Switch, Link, Redirect, HashRouter} from 'react-router-dom'
import NavHeader from './nav_header/nav_header'
import Footer from './footer/footer'

const App = () => {
    return (
        <div>
            <NavHeader />
            <p>main content</p>
            <Footer />
        </div>
    )
}

export default App;

