import React, { FormEvent, useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchContext from '../../contexts/search.context';

import './styles.css';

const SearchBar: React.FC = () => {
  const [inputUrlData, setInputUrlData] = useState<string>('');

  const searchContext = useContext(SearchContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let localUrl = inputUrlData;

    if (!inputUrlData.startsWith('http://') && !inputUrlData.startsWith('https://')) {
      localUrl = 'http://' + inputUrlData;
      setInputUrlData(localUrl);
    }

    searchContext.setUrl(localUrl);
  }

  return (
    <header id="tbrowser-header">
      <form id="search-bar-container">
        <input
          onChange={(e) => setInputUrlData(e.target.value)}
          value={inputUrlData}
          type="text"
          name=""
          id=""
          placeholder="https://google.com"
        />
        <button onClick={handleSubmit} type="submit" id="btn">
          <FiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
