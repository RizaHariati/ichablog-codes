import { IContentState } from "../context/interfaces";

interface IOpenModalAction {
  type: string;
  payload?: any;
}

export const contentReducer = (
  state: IContentState,
  action: IOpenModalAction
) => {
  switch (action.type) {
    case "ACTION_B":
      const city = state.city === "Manchester" ? "Bali" : "Manchester";
      return { ...state, city };
    default:
      return state;
  }
};
