import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

const Root = ({store}) => {
    return (
    <HashRouter>
        <Provider store={store}>
            <h1>HELLO WORLD</h1>
        </Provider>
    </HashRouter>
    )
}

export default Root;