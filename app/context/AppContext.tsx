import { createContext } from "react";
import { IAppState } from "./interfaces";

export type AppContextProps = {
  state: IAppState;
  dispatch: ({ type }: { type: string; payload?: any }) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
