import { RECEIVE_USER_DATA } from "../actions/users";

const users = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_DATA:
      return action.users;
    default:
      return state;
  }
};

export default users;
