import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import { setCurrentUser } from "../../actions/current_user";

const Box = styled.div`
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const UserBox = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const from = location.state?.from || "/";
  const signIn = (user) => {
    dispatch(setCurrentUser(user));
    history.replace(from);
  };

  return (
    <Box onClick={() => signIn(user)}>
      <AvatarImage src={user.avatarURL} alt={`${user.id}'s avatar picture`} />
      <p>{user.id}</p>
    </Box>
  );
};

export default UserBox;
