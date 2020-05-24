export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER });
