"use client";

import { AppState } from "../context/interfaces";
import { Reducer } from "react";
import { userReducer } from "./userReducer";
import { initialUser } from "./initialUser";
import { initialContent } from "./initialContent";
import { contentReducer } from "./contentReducer";
import combineReducers from "react-combine-reducers";

interface OpenModalAction {
  type: string;
  payload?: any;
}
export const InitialStateAll: AppState = {
  user: initialUser,
  content: initialContent,
};

type AppReducer = (
  InitialStateAll: AppState,
  action: OpenModalAction
) => AppState;

export const [appReducer, initialState] = combineReducers<AppReducer>({
  user: [userReducer, initialUser],
  content: [contentReducer, initialContent],
});
