import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import UserBox from "./UserBox";
import { setCurrentUser } from "../../actions/current_user";
import { WarningNotice } from '../common'

const Container = styled.div`
  text-align: center;
`

const UserList = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

const UserSelect = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const from = location.state?.from || "/";
  const notice = location.state?.notice
  const signIn = (user) => {
    dispatch(setCurrentUser(user));
    history.replace(from);
  };

  const users = useSelector((state) => state.users);

  return (
    <Container>
      {notice && <WarningNotice>{notice}</WarningNotice>}
      <h1>Select user</h1>
      <UserList>
        {Object.keys(users).map((user) => (
          <UserBox key={users[user].id} user={users[user]} onSelect={signIn} />
        ))}
      </UserList>
    </Container>
  );
};

export default UserSelect;
