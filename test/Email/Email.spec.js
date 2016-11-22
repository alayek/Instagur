import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Email from '../../src/Email';

describe('<Email>', () => {
  it('should have an input for the email', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', () => {
    const wrapper = shallow(<Email />);
    /* eslint no-unused-expressions: 0 */
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });
});
