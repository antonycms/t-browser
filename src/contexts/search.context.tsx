/* eslint-disable react/prop-types */
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface IUrlContext {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}

const UrlContext = createContext<IUrlContext>({} as IUrlContext);

export const SearchProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('http://github.com/antonycms');

  return <UrlContext.Provider value={{ url, setUrl }}>{children}</UrlContext.Provider>;
};

export default UrlContext;
