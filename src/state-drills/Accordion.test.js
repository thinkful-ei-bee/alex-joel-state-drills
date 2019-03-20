import React from 'react';
import Accordion from './Accordion';
import ReactDOM from 'react-dom';
import {sections} from './AccordionStore';


describe('Accordion Test', () =>{
    it('Accordion renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion sections={sections}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Accordion renders empty without prop',() =>{
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
