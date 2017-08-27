import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './../components/search';

import { changeSearch } from './../actions/changeSearch';

const SearchContainer = ({ searchValue, onChangeSearch }) => (
  <Search
    searchValue={searchValue}
    onChangeSearch={onChangeSearch}
  />
);

SearchContainer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    searchValue: state.search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: (value) => dispatch(changeSearch(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
