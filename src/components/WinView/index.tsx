/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import SearchContext from '../../contexts/search.context';

import './styles.css';

interface IWinView {
  width: number;
  height: number;
  title: string;
  userAgent: string;
}

const WinView: React.FC<IWinView> = ({ width, height, userAgent, title }) => {
  const zoom = 0.5;

  const searchContext = useContext(SearchContext);

  return (
    <div id="winview-container">
      <span className="title">
        {title} ({width}x{height})
      </span>
      <div
        style={{
          width: width * zoom,
          height: height * zoom,
          marginTop: 10,
        }}
      >
        <webview
          src={searchContext.url}
          useragent={userAgent}
          style={{
            width,
            height,
            transform: `scale(${zoom})`,
          }}
        />
      </div>
    </div>
  );
};

export default WinView;
