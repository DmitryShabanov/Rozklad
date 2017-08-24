import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

const Search = ({ searchValue, onChangeSearch }) => (
  <section className="container search">
    <div className="col-12">
      <div className="search__form">
        <input
          className="search__field"
          type="text"
          value={searchValue}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Type group name"
        />
        <Link
          className="search__button"
          to={`/${searchValue}`}
          onClick={() => onChangeSearch('')}
        >search</Link>
      </div>
    </div>
  </section>
);

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default Search;
