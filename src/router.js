import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';
import Login from './layouts/Login';
export default class Router extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout}  exact />
                        <Route path="/login" component={Login} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
