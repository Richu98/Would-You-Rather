import { SET_CURRENT_USER, UNSET_CURRENT_USER } from "../actions/current_user";

const currentUser = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { id: action.user.id, name: action.user.name };
    case UNSET_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUser;
