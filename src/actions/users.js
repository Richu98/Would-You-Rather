import { _getUsers as getUsers } from "../_DATA";

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

const receiveUserData = (users) => ({
  type: RECEIVE_USER_DATA,
  users,
});

export const handleInitialUserData = () => (dispatch) => {
  getUsers().then((users) => dispatch(receiveUserData(users)));
};
