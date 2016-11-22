import React, { Component } from 'react';
import md5 from 'md5';

import Avatar from './Avatar';
import Email from './Email';

export default class Gravatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200',
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updateGravatar = this.updateGravatar.bind(this);
  }

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`,
    });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar email={this.state.email} src={this.state.src} />
        <Email
          fetchGravatar={this.updateGravatar} handleEmailChange={this.updateEmail}
        />
      </div>
    );
  }
}
