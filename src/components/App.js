import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import SignIn from "./SignIn";
import Logout from "./Logout";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/sign_in" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/sign_in", state: { from: location } }} />
        )
      }
    />
  );
};

export default App;
