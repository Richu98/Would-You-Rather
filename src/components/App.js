import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import SignIn from "./SignIn";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Header from "./Header";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import Leaderboard from "./Leaderboard";

const Container = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const LOGIN_NOTICE = "You need to be logged in to access this page";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Container>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute exact path="/add">
              <NewQuestion />
            </PrivateRoute>
            <PrivateRoute exact path="/questions/:id">
              <Question />
            </PrivateRoute>
            <PrivateRoute exact path="/leaderboard">
              <Leaderboard />
            </PrivateRoute>
            <Route exact path="/sign_in" component={SignIn} />
            <PrivateRoute exact path="/logout">
              <Logout />
            </PrivateRoute>
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

const PrivateRoute = ({ children, render, ...rest }) => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          children || render(props)
        ) : (
          <Redirect
            to={{
              pathname: "/sign_in",
              state: { from: props.location, notice: LOGIN_NOTICE },
            }}
          />
        )
      }
    />
  );
};

export default App;
