import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './../components/search';

import { changeSearch } from './../actions/changeSearch';
import { getGroupTimetable } from './../actions/getGroupTimetable';

const SearchContainer = ({ searchValue, onChangeSearch, onGetTimetable }) => (
  <Search
    searchValue={searchValue}
    onChangeSearch={onChangeSearch}
    onGetTimetable={onGetTimetable}
  />
);

SearchContainer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onGetTimetable: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    searchValue: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (value) => dispatch(changeSearch(value)),
    onGetTimetable: (groupName) => dispatch(getGroupTimetable(groupName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
