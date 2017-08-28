import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const GroupTimetable = ({ groupTimetable }) => (
  <div>
    <h1>Group Name: {groupTimetable.group.group_full_name}</h1>
    <Link to="/">back</Link>
  </div>
);

GroupTimetable.propTypes = {
  groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GroupTimetable;
