import { RECEIVE_USER_DATA } from "../actions/users";

const usersLoading = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_USER_DATA:
      return false;
    default:
      return state;
  }
};

export default usersLoading;
