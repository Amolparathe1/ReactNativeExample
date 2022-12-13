import { combineReducers } from "redux";
import LatLongReducer from "./latLog/latLongReducer";

const AppReducers = combineReducers({
  LatLongReducer,
});

const rootReducer = (state: any, action: any) => {
  return AppReducers(state, action);
};

export default rootReducer;
