import {
  SET_LAT_LONG_FIRST_PAGE,
  SET_LAT_LONG_SECOND_PAGE,
} from "./actionTypes";

const INITIAL_STATE = {
  LatLongFirstPage: { lat: null, long: null },
  LatLongSecondPage: { lat: null, long: null },
};
const LatLongReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_LAT_LONG_FIRST_PAGE:
      return Object.assign({}, state, {
        LatLongFirstPage: action.list,
      });
    case SET_LAT_LONG_SECOND_PAGE:
      return Object.assign({}, state, {
        LatLongSecondPage: action.list,
      });
    default:
      return state;
  }
};
export default LatLongReducer;
