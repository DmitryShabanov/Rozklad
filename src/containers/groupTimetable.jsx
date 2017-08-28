import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupTimetable from './../components/groupTimetable';

import { getGroupTimetable } from './../actions/getGroupTimetable';

class GroupTimetableContainer extends Component {
  componentDidMount() {
    this.props.onGetTimetable(this.props.groupName);
  }

  render() {
    return (
      <GroupTimetable
        groupTimetable={this.props.groupTimetable}
      />
    );
  }
}

GroupTimetableContainer.propTypes = {
  groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
  groupName: PropTypes.string.isRequired,
  onGetTimetable: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    groupTimetable: state.groupTimetable,
    groupName: ownProps.match.params.groupName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTimetable: (groupName) => dispatch(getGroupTimetable(groupName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTimetableContainer);
