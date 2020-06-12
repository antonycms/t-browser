/* eslint-disable react/prop-types */
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface IZoomContext {
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
}

const ZoomContext = createContext<IZoomContext>({} as IZoomContext);

export const ZoomProvider: React.FC = ({ children }) => {
  const [zoom, setZoom] = useState<number>(0.5);

  return <ZoomContext.Provider value={{ zoom, setZoom }}>{children}</ZoomContext.Provider>;
};

export default ZoomContext;
