import React from 'react';
import './App.css';

import Home from './pages/Home';
import { SearchProvider } from './contexts/search.context';

function App(): React.ReactElement {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}

export default App;
