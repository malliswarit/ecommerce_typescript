import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    RouteComponentProps
  } from "react-router-dom";

import HomePage from './HomePage';
import BookDetails from './BookDetails';
import MyOrders from "./MyOrders";
import Header from "./Header";
import MyCarts from "./Cart";
class RouterPath extends Component {
  
  render() {
    
    return (
        <Router>
            <Header />
        <Switch>
        <Route path="/bookdetails" component={BookDetails} />
        <Route path="/home" component={HomePage} />
        <Route path="/myorders" component={MyOrders} />
        <Route path="/mycarts" component={MyCarts} />
        <Redirect from ="/" to ="/home" />
    </Switch>
    </Router>
    );
  }
}

export default RouterPath;
