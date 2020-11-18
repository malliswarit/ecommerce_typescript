


import React, { Component } from 'react';

import RouterPath from "./components/Router";
import {Provider} from 'react-redux';
import store from "./components/store";
import './App.css';

class App extends Component {
  
  render() {
  
    return (
      <React.Fragment>
       
    <Provider store={store}>
        <RouterPath />
        </Provider>
      </React.Fragment>
   
  
 
    );
  }
}

export default App;

