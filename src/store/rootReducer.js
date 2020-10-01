import { combineReducers } from "redux";

import userReducer from "./slices/user";

const appReducer = combineReducers({
  user: userReducer,
});

export default appReducer;
