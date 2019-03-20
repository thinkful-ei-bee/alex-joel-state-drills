import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWOrld from './state-drills/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWOrld />
      </div>
    );
  }
}

export default App;
