import { IUserState } from "../context/interfaces";

interface OpenModalAction {
  type: string;
  payload?: any;
}

export const userReducer = (state: IUserState, action: OpenModalAction) => {
  switch (action.type) {
    case "ACTION_A":
      return { ...state, name: "Puli" };
    default:
      return state;
  }
};
