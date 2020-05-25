import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled(NavLink)`
  display: block;
  border: 1px solid #ddd;
  width: 20rem;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
`;

const UserInfoContainer = styled.div`
  margin: 1rem 0;
  text-decoration: none;
  color: black;
`;

const UserAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Container = styled.div`
  color: black;
`;

const QuestionBox = ({ question }) => {
  const user = useSelector(state => state.users[question.author])

  return (
    <NavBox exact to={`/questions/${question.id}`}>
      <UserInfoContainer>
        <UserAvatar src={user.avatarURL} />
        asked by <b>{user.name}</b>
      </UserInfoContainer>
      <Container>Would you rather ...{question.optionOne.text}...</Container>
    </NavBox>
  );
};

export default QuestionBox;
