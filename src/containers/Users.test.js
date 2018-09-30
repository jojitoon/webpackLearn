import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import Users from './Users';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Pizza container', () => {
    const wrapper = shallow(<Users />);
    it('return renders',() => {
        expect(wrapper.exists()).toBe(true);
    });
});