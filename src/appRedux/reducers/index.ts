import imageSLiceReducer from "./imageSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  list: imageSLiceReducer,
});

export default rootReducer;
