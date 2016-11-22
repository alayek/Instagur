import React, { PropTypes } from 'react';

const Avatar = ({ src, email }) => (
  <div className="avatar">
    <p>
      <em>{email}</em>
    </p>
    <img src={src} className="img-rounded" alt={email} />
  </div>
);

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
