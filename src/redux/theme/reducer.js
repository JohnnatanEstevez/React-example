import { TOGGLE_THEME } from "./types";
const initialState = {
  color: "blue",
  bgColor: "orange",
};
export default function themeReducer(state = initialState, action) {
  if (action.type === TOGGLE_THEME) {
    if (state.color === "blue") {
      return { color: "green", bgColor: "yellow" };
    } else {
      return initialState;
    }
  }
  return state;
}
