import React from "react";
import styled from "styled-components";

const Box = styled.div`
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const UserBox = ({ user, onSelect }) => (
  <Box onClick={() => onSelect(user)}>
    <AvatarImage src={user.avatarURL} alt={`${user.id}'s avatar picture`} />
    <p>{user.id}</p>
  </Box>
);

export default UserBox;
