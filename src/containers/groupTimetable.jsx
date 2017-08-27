import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupTimetable from './../components/groupTimetable';

const GroupTimetableContainer = ({ groupName }) => (
  <GroupTimetable groupName={groupName} />
);

GroupTimetableContainer.propTypes = {
  groupName: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    groupName: state.groupTimetable.group.group_full_name,
    groupTimetable: state.groupTimetable,
  };
}

export default connect(mapStateToProps)(GroupTimetableContainer);
