import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;

const NavigationItemContainer = styled.div``;

const activeClassName = "nav-item-active";

const NavItem = styled(NavLink).attrs({ activeClassName })`
  padding-right: 1rem;

  &.${activeClassName} {
    background-color: paleturquoise;
  }
`;

const UserText = styled.div`
  margin-right: 0.5rem;
`;

const LogoutContainer = styled.div`
  display: flex;
`;

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Container>
      <NavigationItemContainer>
        <NavItem exact to="/" activeClassName={activeClassName}>
          Home
        </NavItem>
        <NavItem exact to="/questions/new" activeClassName={activeClassName}>
          New Question
        </NavItem>
        <NavItem exact to="/leaderboard" activeClassName={activeClassName}>
          Leaderboard
        </NavItem>
      </NavigationItemContainer>
      {currentUser && (
        <LogoutContainer>
          <UserText>Hello, {currentUser.name}!</UserText>
          <NavLink to="/logout">Logout</NavLink>
        </LogoutContainer>
      )}
    </Container>
  );
};

export default Header;
