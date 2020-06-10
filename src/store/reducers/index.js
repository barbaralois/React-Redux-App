import { combineReducers } from "redux";
import { picsReducer } from "./picsReducer";
import { factsReducer } from "./factsReducer";

export default combineReducers({
  picsReducer: picsReducer,
  factsReducer: factsReducer
});
