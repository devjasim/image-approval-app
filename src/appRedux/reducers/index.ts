import { imageSLiceReducer, getImageReducer } from "./imageSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  list: imageSLiceReducer,
  thumb: getImageReducer,
});

export default rootReducer;
