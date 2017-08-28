import React, { Component } from 'react';
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
          data={this.props.data}
        />
      );
    }
    return result;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    groupName: ownProps.match.params.groupName,
    data: state.groupTimetable,
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
