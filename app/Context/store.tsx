'use client'

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextPorps {
  filterRegion: string,
  setFilterRegion: Dispatch<SetStateAction<string>>,
  filterSearchTerm: string,
  setFilterSearchTerm: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextPorps>({
  filterRegion: '',
  setFilterRegion: (): string => '',
  filterSearchTerm: '',
  setFilterSearchTerm: (): string => '',
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterSearchTerm, setFilterSearchTerm] = useState('');
  return (
    <GlobalContext.Provider value={{
      filterRegion,
      setFilterRegion,
      filterSearchTerm,
      setFilterSearchTerm,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);