import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import home from './pages/home'
import other0 from './pages/other0'
import other1 from './pages/other1'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route path='/other0' component={other0}/>
                    <Route path='/other1' component={other1}/>
                </Switch>
            </div>
        )
    }
}