import React from 'react'
import {Route, Switch, Link, Redirect, HashRouter} from 'react-router-dom'
import NavHeaderContainer from './nav_header/nav_header_container'
import Footer from './footer/footer'
import ModalContainer from './modal/modal_container'
import Home from './home/home'
import PropertiesSearchContainer from './property_search/properties_search_container'
import PropertyPageContainer from './property_page/property_page_container'

const App = () => {
    return (
        <div>
            <ModalContainer />
            <NavHeaderContainer />

            <Switch>
                <Route path='/properties/:property_id' component={PropertyPageContainer} />
                <Route path='/properties' exact component={PropertiesSearchContainer}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default App;

