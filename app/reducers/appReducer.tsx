import { IAppState } from "../context/interfaces";

import { userReducer } from "./userReducer";
import { initialUser } from "./initialUser";
import { initialContent } from "./initialContent";
import { contentReducer } from "./contentReducer";
import combineReducers from "react-combine-reducers";

interface OpenModalAction {
  type: string;
  payload?: any;
}
export const InitialStateAll: IAppState = {
  user: initialUser,
  content: initialContent,
};

type AppReducer = (
  InitialStateAll: IAppState,
  action: OpenModalAction
) => IAppState;

export const [appReducer, initialState] = combineReducers<AppReducer>({
  user: [userReducer, initialUser],
  content: [contentReducer, initialContent],
});
