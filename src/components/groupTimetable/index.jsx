import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const GroupTimetable = ({ groupTimetable }) => {
  let result = null;
  if (groupTimetable.isLoaded) {
    result = (
      <div>
        <h1>Group Name: {groupTimetable.data.group.group_full_name}</h1>
        <Link to="/">back</Link>
      </div>
    );
  }
  return result;
};

GroupTimetable.propTypes = {
  groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GroupTimetable;
