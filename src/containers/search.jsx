import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './../components/search';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(value) {
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <Search
        searchValue={this.state.searchValue}
        onChangeSearch={this.onChangeSearch}
        history={this.props.history}
      />
    );
  }
}

SearchContainer.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchContainer;
