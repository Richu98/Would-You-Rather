import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { unsetCurrentUser } from "../actions/current_user";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(unsetCurrentUser());
    history.replace("/sign_in");
  }, [dispatch, history]);

  return null;
};

export default Logout;
