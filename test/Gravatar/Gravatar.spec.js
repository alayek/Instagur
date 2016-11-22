import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';

import Gravatar from '../../src/Gravatar';
import Avatar from '../../src/Avatar';
import Email from '../../src/Email';

describe('<Gravatar />', () => {
  it('contains an <Avatar/> component', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar />);
    wrapper.setState({ email: 'hello@ifelse.io' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@ifelse.io')}?s=200`);
  });
});
