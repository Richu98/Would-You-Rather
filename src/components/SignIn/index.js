import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleInitialUserData } from "../../actions/users";
import UserSelect from "./UserSelect";

const SignIn = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(handleInitialUserData()), [dispatch]);

  const usersLoading = useSelector((state) => state.usersLoading);

  if (usersLoading) {
    return <h2>Loading...</h2>;
  }

  return <UserSelect />;
};

export default SignIn;
