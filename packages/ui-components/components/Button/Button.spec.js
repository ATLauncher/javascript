import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
    let sandbox;

    before(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should mount correctly', () => {
        const wrapper = mount(
            <Button />
        );

        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('.atl-button').length).to.equal(1);
    });

    it('should have the passed in text displayed', () => {
        const wrapper = mount(
            <Button text="Test Button" />
        );

        const component = wrapper.find('.atl-button');

        expect(component.text()).to.equal('Test Button');
    });
});
