import { RECEIVE_USER_DATA } from "../actions/users";
import { VOTE } from "../actions/common";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_DATA:
      return action.users;
    case VOTE:
      return Object.fromEntries(
        Object.entries(state).map(([key, user]) =>
          user.id === action.userId
            ? [
                key,
                {
                  ...user,
                  answers: {
                    ...user.answers,
                    [action.id]: action.option,
                  },
                },
              ]
            : [key, user]
        )
      );
    default:
      return state;
  }
};

export default users;
