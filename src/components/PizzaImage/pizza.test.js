import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import Pizza from './PizzaImage';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Pizza', () => {
    const wrapper = shallow(<Pizza />);
    it('return renders',() => {
        expect(wrapper.exists()).toBe(true);
    });
});