import { SET_USER } from "./actionTypes";

const INITIAL_STATE = {
  user: [],
};
const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.value,
      });

    default:
      return state;
  }
};
export default userReducer;
