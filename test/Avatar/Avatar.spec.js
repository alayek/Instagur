import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from '../../src/Avatar';

describe('<Avatar/>', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const wrapper = shallow(<Avatar />);
    /* eslint no-unused-expressions: 0 */
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
