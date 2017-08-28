import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const GroupTimetable = ({ data }) => {
  const groupName = data.group.group_full_name;
  return (
    <div>
      <h1>Group Name: {groupName}</h1>
      <Link to="/">back</Link>
    </div>
  );
};

GroupTimetable.propTypes = {
  data: PropTypes.shape({
    group: PropTypes.shape({
      group_full_name: PropTypes.string.isRequired,
    }).isRequired,
    // weeks: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default GroupTimetable;
