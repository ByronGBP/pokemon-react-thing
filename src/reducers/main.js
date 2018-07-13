import { combineReducers } from "redux";

import navBarReducer from "./path";

const rootReducer = combineReducers({
  currentPath: navBarReducer
});

export default rootReducer;