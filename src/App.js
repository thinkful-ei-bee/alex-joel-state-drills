import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWOrld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';
import {sections} from './state-drills/AccordionStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWOrld />
        <Bomb />
        <RouletteGun />
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
