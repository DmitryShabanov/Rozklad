import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupTimetable from './../components/groupTimetable';

import { getGroupTimetable } from './../actions/getGroupTimetable';

class GroupTimetableContainer extends Component {
  componentWillMount() {
    this.props.onGetTimetable(this.props.groupName);
  }

  render() {
    return (
      <GroupTimetable
        groupName={this.props.groupName}
        groupTimetable={this.props.groupTimetable}
      />
    );
  }
}

GroupTimetableContainer.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
  onGetTimetable: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    groupName: ownProps.match.params.groupName,
    groupTimetable: state.groupTimetable,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTimetable: (groupName) => dispatch(getGroupTimetable(groupName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTimetableContainer);
