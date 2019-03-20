import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWOrld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWOrld />
        <Bomb />
      </div>
    );
  }
}

export default App;
