import React from 'react';
import './App.css';

import Home from './pages/Home';
import { SearchProvider } from './contexts/search.context';
import { ZoomProvider } from './contexts/zoom.context';

function App(): React.ReactElement {
  return (
    <SearchProvider>
      <ZoomProvider>
        <Home />
      </ZoomProvider>
    </SearchProvider>
  );
}

export default App;
