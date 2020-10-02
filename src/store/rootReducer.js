import { combineReducers } from "redux";

import userReducer from "./slices/user";
import tourReducer from "./slices/tour";

const appReducer = combineReducers({
  user: userReducer,
  tour: tourReducer,
});

export default appReducer;
