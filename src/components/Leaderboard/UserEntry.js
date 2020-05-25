import React from "react";
import styled from "styled-components";

import { AvatarImage } from "../common";

const Box = styled.div`
  display: block;
  border: 1px solid #ddd;
  width: 20rem;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
`;

const StatText = styled.div`
  margin: 0.5rem;
`;

const UserEntry = ({ user }) => {
  return (
    <Box>
      <AvatarImage src={user.avatarURL} alt={`${user.id}'s avatar picture`} />
      <p>{user.name}</p>
      <Stats>
        <StatText>Questions asked: {user.questions.length}</StatText>
        <StatText>
          Questions answered: {Object.keys(user.answers).length}
        </StatText>
      </Stats>
    </Box>
  );
};

export default UserEntry;
