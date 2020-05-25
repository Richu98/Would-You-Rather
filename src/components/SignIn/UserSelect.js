import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UserBox from "./UserBox";

const Container = styled.div`
  text-align: center;
`

const UserList = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

const UserSelect = () => {
  const users = useSelector((state) => state.users);

  return (
    <Container>
      <h1>Select user</h1>
      <UserList>
        {Object.keys(users).map((user) => (
          <UserBox key={users[user].id} user={users[user]} />
        ))}
      </UserList>
    </Container>
  );
};

export default UserSelect;
