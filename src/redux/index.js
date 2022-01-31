import { createStore, combineReducers } from "redux";
//
import themeReducer from "./theme/reducer";

const reducers = combineReducers({
  theme: themeReducer,
});
//creamos el store
export const store = createStore(reducers);
