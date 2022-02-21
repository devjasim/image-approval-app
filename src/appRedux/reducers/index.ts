import { imageSLiceReducer, getImageReducer } from "./imageSlice";
import { combineReducers } from "redux";

// Root Reducers
const rootReducer = combineReducers({
  list: imageSLiceReducer,
  thumb: getImageReducer,
});

export default rootReducer;
