import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const GroupTimetable = ({ groupName }) => (
  <div>
    <h1>Group name: {groupName}</h1>
    <Link to="/">back</Link>
    {/* <div>{groupTimetable.group.group_id}</div> */}
  </div>
);

GroupTimetable.propTypes = {
  groupName: PropTypes.string.isRequired,
  // groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GroupTimetable;
