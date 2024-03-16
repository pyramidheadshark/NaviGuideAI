import { combineReducers } from "redux";
import settingsSlice from "./settingsSlice";

const rootReducer = combineReducers({
  settings: settingsSlice,
});

export default rootReducer;
