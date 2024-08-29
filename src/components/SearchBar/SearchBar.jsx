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
      <button onClick={toggleInputVisibility} className={css.searchButton}>
        <img src={search} alt="Search" />
      </button>
      {isInputVisible && (
        <input
          type="text"
          placeholder="Search..."
          className={css.searchInput}
        />
      )}
    </div>
  );
};

export default SearchBar;
