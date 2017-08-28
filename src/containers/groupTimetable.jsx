import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupTimetable from './../components/groupTimetable';

import { getGroupTimetable } from './../actions/getGroupTimetable';
import { resetGroupTimetable } from './../actions/resetGroupTimetable';

class GroupTimetableContainer extends Component {
  componentDidMount() {
    this.props.onGetTimetable(this.props.groupName);
  }

  componentWillUnmount() {
    this.props.onResetGroupTimetable();
  }

  render() {
    let result = null;
    if (this.props.loaded) {
      result = (
        <GroupTimetable
          groupTimetable={this.props.groupTimetable}
        />
      );
    }
    return result;
  }
}

GroupTimetableContainer.propTypes = {
  groupTimetable: PropTypes.objectOf(PropTypes.any).isRequired,
  groupName: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  onGetTimetable: PropTypes.func.isRequired,
  onResetGroupTimetable: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    groupTimetable: state.groupTimetable,
    groupName: ownProps.match.params.groupName,
    loaded: state.loaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTimetable: (groupName) => dispatch(getGroupTimetable(groupName)),
    onResetGroupTimetable: () => dispatch(resetGroupTimetable()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTimetableContainer);
