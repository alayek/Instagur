import React, { PropTypes } from 'react';

const Email = ({ handleEmailChange, fetchGravatar }) => (
  <div className="form-group">
    <input
      onChange={handleEmailChange}
      className="form-control" style={{
        width: 200,
      }}
      type="text"
    />
    <button
      onClick={fetchGravatar}
      className="btn-success btn"
    >
      Fetch
    </button>
  </div>
);

Email.propTypes = {
  handleEmailChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
};

export default Email;
