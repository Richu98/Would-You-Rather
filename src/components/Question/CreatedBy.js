import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { AvatarImage } from "../common";

const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UserAvatar = styled(AvatarImage)`
  padding-right: 0.5rem;
`;

const CreatedBy = ({ questionId }) => {
  const author = useSelector(
    (state) => state.users[state.questions[questionId].author]
  );

  return (
    <AuthorContainer>
      <UserAvatar
        src={author.avatarURL}
        alt={`${author.id}'s avatar picture`}
      />
      <p>{author.name}</p>
    </AuthorContainer>
  );
};

export default CreatedBy;
