import React from "react";
import styled from "styled-components";

import { AvatarImage } from "../common";

const Box = styled.div`
  cursor: pointer;
`;

const UserBox = ({ user, onSelect }) => (
  <Box onClick={() => onSelect(user)}>
    <AvatarImage src={user.avatarURL} alt={`${user.id}'s avatar picture`} />
    <p>{user.id}</p>
  </Box>
);

export default UserBox;
