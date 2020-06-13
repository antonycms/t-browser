/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import SearchContext from '../../contexts/search.context';
import ZoomContext from '../../contexts/zoom.context';

import { Container, Title, ViewContainer } from './styles';

interface IWinView {
  width: number;
  height: number;
  title: string;
  userAgent: string;
}

interface IWillNavigateEvent {
  url: string;
  target: HTMLWebViewElement;
}

const WinView: React.FC<IWinView> = ({ width, height, userAgent, title }) => {
  const { url, setUrl } = useContext(SearchContext);
  const { zoom } = useContext(ZoomContext);
  let webviewRef: any = null;

  useEffect(() => {
    if (webviewRef) {
      webviewRef.addEventListener('will-navigate', (event: IWillNavigateEvent) => {
        if (event.url) {
          setUrl(event.url);
        }
      });
    }
  }, [webviewRef, setUrl]);

  return (
    <Container>
      <Title>
        {title} ({width}x{height})
      </Title>

      <ViewContainer zoom={zoom} width={width} height={height}>
        <webview // styled-components not work user-agent webview :(
          src={url}
          useragent={userAgent}
          ref={(ref) => (webviewRef = ref)}
          style={{
            width,
            height,
            transform: `scale(${zoom})`,
            transformOrigin: 'left top',
            border: '1px solid #c4c4c4',
            borderRadius: 4,
          }}
        />
      </ViewContainer>
    </Container>
  );
};

export default WinView;
