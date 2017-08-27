import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const GroupTimetable = ({ groupName }) => (
  <div>
    <h1>GroupID {groupName}</h1>
    <Link to="/">back</Link>
  </div>
);

GroupTimetable.propTypes = {
  groupName: PropTypes.string.isRequired,
};

export default GroupTimetable;
