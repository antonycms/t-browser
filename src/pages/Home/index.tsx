import React from 'react';

import { Container, Header, ViewsContainer } from './styles';

import { UserAgent } from '../../schemas/uger-agent';

import WinView from '../../components/WinView';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <SearchBar />
      </Header>

      <ViewsContainer>
        <WinView title="Desktop" userAgent={UserAgent.DESKTOP} width={1600} height={900} />
        <WinView title="IPad" userAgent={UserAgent.IPHONE} width={728} height={1024} />
        <WinView title="Iphone X" userAgent={UserAgent.IPHONE} width={375} height={812} />
      </ViewsContainer>
    </Container>
  );
};

export default Home;
