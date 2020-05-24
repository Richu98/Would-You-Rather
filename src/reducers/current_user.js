import { SET_CURRENT_USER } from "../actions/current_user";

const currentUser = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default currentUser;
