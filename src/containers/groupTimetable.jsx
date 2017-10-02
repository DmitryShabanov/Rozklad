import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupTimetable from './../components/groupTimetable';
import Spinner from './../components/spinner';
import NotFound from './../components/notFound';

import { getGroupTimetable } from './../actions/getGroupTimetable';
import { resetGroupTimetable } from './../actions/resetGroupTimetable';
import { changeNotFound } from './../actions/changeNotFound';

class GroupTimetableContainer extends Component {

  componentDidMount() {
    this.props.onGetTimetable(this.props.groupName);
  }

  componentWillUnmount() {
    this.props.onResetGroupTimetable();
    this.props.onChangeNotFound();
  }

  render() {
    let result = null;

    if (this.props.data && this.props.currentWeek) {
      result = (
        <GroupTimetable
          data={this.props.data}
          currentWeek={this.props.currentWeek}
        />
      );
    } else {
      result = <Spinner />;
      if (this.props.isNotFound) {
        result = <NotFound />;
      }
    }

    return result;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    groupName: ownProps.match.params.groupName,
    data: state.groupTimetable,
    currentWeek: state.currentWeek,
    isNotFound: state.isNotFound,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTimetable: (groupName) => dispatch(getGroupTimetable(groupName)),
    onResetGroupTimetable: () => dispatch(resetGroupTimetable()),
    onChangeNotFound: () => dispatch(changeNotFound(false)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTimetableContainer);
