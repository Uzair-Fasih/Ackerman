import { combineReducers } from "redux";
import showcaseReducer from "./showcase";

export default combineReducers({
  showcase: showcaseReducer,
});
