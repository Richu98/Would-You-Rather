import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { handleInitialUserData } from "../../actions/users";
import { setCurrentUser } from "../../actions/current_user";

import UserSelect from "./UserSelect";

const SignIn = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(handleInitialUserData()), [dispatch]);

  const location = useLocation();
  const history = useHistory();

  const from = location.state?.from || "/";
  const signIn = (user) => {
    dispatch(setCurrentUser(user));
    history.replace(from);
  };

  const usersLoading = useSelector((state) => state.usersLoading);

  if (usersLoading) {
    return <h2>Loading...</h2>;
  }

  return <UserSelect onSelect={signIn} />;
};

export default SignIn;
