import {
  SET_LAT_LONG_FIRST_PAGE,
  SET_LAT_LONG_SECOND_PAGE,
} from "./actionTypes";

export const SetLatLongFirstPage = (value: any) => ({
  type: SET_LAT_LONG_FIRST_PAGE,
  value,
});
export const SetLatLongSecondPage = (value: any) => ({
  type: SET_LAT_LONG_SECOND_PAGE,
  value,
});
