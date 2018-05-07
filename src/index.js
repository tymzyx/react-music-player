import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store/index'

import 'semantic-ui-css/semantic.min.css'

import App from './App'

ReactDom.render(
    (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    ),
    document.getElementById('root')
);