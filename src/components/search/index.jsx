import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Search = ({ searchValue, onChangeSearch, history }) => (
  <section className="container search">
    <div
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        history.push(`/${searchValue}`);
      }}
    >
      <form className="search__form">
        <input
          className="search__field"
          type="text"
          value={searchValue}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Type group name"
        />
        <input
          className="search__button"
          type="submit"
          value="search"
        />
      </form>
    </div>
  </section>
);

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Search;
