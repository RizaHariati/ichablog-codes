"use client";

import { AppState, ContentState } from "../context/interfaces";

interface OpenModalAction {
  type: string;
  payload?: any;
}

export const contentReducer = (
  state: ContentState,
  action: OpenModalAction
) => {
  switch (action.type) {
    case "ACTION_B":
      const city = state.city === "Manchester" ? "Bali" : "Manchester";
      return { ...state, city };
    default:
      return state;
  }
};
