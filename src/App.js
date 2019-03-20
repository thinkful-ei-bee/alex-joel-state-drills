import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate />
        <Counter />
      </div>
    );
  }
}

export default App;
