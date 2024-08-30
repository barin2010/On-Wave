import React, { useState } from 'react';
import css from './SearchBar.module.css';
import search from '../../images/icons/search.svg';

const SearchBar = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className={css.searchBar}>
      <button
        onClick={toggleInputVisibility}
        className={css.searchButton}
        aria-label="Toggle search input"
      >
        <img src={search} alt="Search Icon" />
      </button>
      {isInputVisible && (
        <input
          type="text"
          placeholder="Search..."
          className={css.searchInput}
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchBar;
