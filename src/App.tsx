import React from 'react';
import { StyleGlobal } from './styles/StyleGlobal';

import Home from './pages/Home';
import { SearchProvider } from './contexts/search.context';
import { ZoomProvider } from './contexts/zoom.context';

function App(): React.ReactElement {
  return (
    <>
      <StyleGlobal />
      <SearchProvider>
        <ZoomProvider>
          <Home />
        </ZoomProvider>
      </SearchProvider>
    </>
  );
}

export default App;
