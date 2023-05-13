"use client";

import { useContext, useReducer } from "react";
import { AppContext } from "./AppContext";
// import { initialState } from "./initialState";
import { appReducer, initialState } from "../reducers/appReducer";

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
