import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const Group = ({ groupId }) => (
  <div>
    <h1>GroupID {groupId}</h1>
    <Link to="/">back</Link>
  </div>
);

Group.propTypes = {
  groupId: PropTypes.string.isRequired,
};

export default Group;
