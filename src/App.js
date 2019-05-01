import React from "react";
// Notice the import,
// It is not importing from the components folder
import ContainerComponent from "./modules/home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, isAuthenticated } from "./modules/common";

const store = configureStore();

// HOC for routes to make them private
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/log-in" />
    }
  />
);

function App() {
  return (
    // This file should contain all your routes
    // Apart from this file, there should not be any routes
    <Provider store={store}>
      <Router>
        <Switch>
          {/* Any user can access this route */}
          <Route component={ContainerComponent} path="/" exact />

          {/* Private route to be accessed only by the authenticated user */}
          <PrivateRoute
            component={ContainerComponent}
            path="/private-home"
            exact
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
