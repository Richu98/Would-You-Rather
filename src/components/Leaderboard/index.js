import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UserEntry from "./UserEntry";

const Container = styled.div`
  display: inline-block;
`;

const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  const questionResponseSum = (user) =>
    user.questions.length + Object.keys(user.answers).length;

  const sortedUsers = Object.values(users).sort(
    (a, b) => questionResponseSum(b) - questionResponseSum(a)
  );

  return (
    <>
      <h2>Leaderboard</h2>
      <Container>
        {sortedUsers.map((user) => (
          <UserEntry key={user.id} user={user} />
        ))}
      </Container>
    </>
  );
};

export default Leaderboard;
