import React, { Component } from "react";
import { Provider } from 'react-redux';
import "./App.css";

//components
import Smurfs from "./Smurfs";
import SmurfsForm from './SmurfsForm';

import store from '../store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <Smurfs />
          <SmurfsForm />
        </Provider>
      </div>
    );
  }
}

export default App;
