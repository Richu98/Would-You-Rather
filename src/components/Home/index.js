import React from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: end;
  text-align: right;
`

const UserText = styled.div`
  padding-right: .5rem;
`

const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (<div>
    <Header>
      <UserText>Hello, {currentUser.id}!</UserText>
      <NavLink to="/logout">Logout</NavLink>
    </Header>
  </div>);
};

export default Home;
