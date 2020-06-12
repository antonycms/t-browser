import React from 'react';

import './styles.css';

import { UserAgent } from '../../schemas/uger-agent';

import WinView from '../../components/WinView';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <SearchBar />

      <div className="views-container">
        <WinView title="Desktop" userAgent={UserAgent.DESKTOP} width={1600} height={900} />
        <WinView title="IPad" userAgent={UserAgent.IPHONE} width={728} height={1024} />
        <WinView title="Iphone X" userAgent={UserAgent.IPHONE} width={375} height={812} />
      </div>
    </div>
  );
};

export default Home;
