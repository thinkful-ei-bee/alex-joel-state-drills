import React from 'react';
import Accordion from './Accordion';
import ReactDOM from 'react-dom';
import {sections} from './AccordionStore';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe('Accordion Test', () =>{
    it('Accordion renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion sections={sections}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('Accordion renders empty without prop',() =>{
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no active sections', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('renders a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('renders only last section when multiple have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
