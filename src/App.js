import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';


import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => import('./containers/Pizza'));

class App extends Component {
  render() {
    return (
            <div>
                <div>
                    <Link to="/" >Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                <Switch>
                     <Route path="/pizza" component = {AsyncPizza} />
                     <Route path="/" exact component={Users} />
                     <Redirect to="/"/>
                </Switch>
                </div>
            </div>
    );
  }
}

export default App;
