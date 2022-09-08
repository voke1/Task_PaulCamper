import { combineReducers } from "redux";
import accountReducer from "./account/accountReducer";

const appReducer = combineReducers({
  accountReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
