import { combineReducers } from "redux";
import LatLongReducer from "./latLog/latLongReducer";
import userReducer from "./user/userReducer";

const AppReducers = combineReducers({
  LatLongReducer,
  userReducer,
});

const rootReducer = (state: any, action: any) => {
  return AppReducers(state, action);
};

export default rootReducer;
