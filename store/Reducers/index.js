import { combineReducers } from "redux";
import showcaseReducer from "./showcase";
import dailyReducer from "./daily";

export default combineReducers({
  showcase: showcaseReducer,
  daily: dailyReducer,
});
