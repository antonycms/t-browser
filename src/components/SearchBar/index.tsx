import React, { FormEvent, useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchContext from '../../contexts/search.context';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [inputUrlData, setInputUrlData] = useState<string>(
    'https://github.com/antonycms/t-browser',
  );

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
    <Container>
      <form>
        <input
          onChange={(e) => setInputUrlData(e.target.value)}
          value={inputUrlData}
          type="text"
          placeholder="https://google.com"
        />
        <button onClick={handleSubmit} type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  );
};

export default SearchBar;
