import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

/** Layouts **/

import AppRoute from "./layout/AppRoute";

/** Components **/

import LoginPage from "./components/login";
import SignUp from "./components/signup";
import UserPage from "./UserPage";
import LoginLayout from "./layout/loginLayout/LoginLayout";
import DashboardLayout from "./layout/dashboadLayout/DashboardLayout";

/* 
   App 
 */

const App = ({ classs }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <AppRoute path="/login" component={LoginPage} layout={LoginLayout} />
        <AppRoute path="/signup" component={SignUp} layout={LoginLayout} />
        <AppRoute
          path="/dashboard"
          component={UserPage}
          layout={DashboardLayout}
        />
      </Switch>
    </Router>
  );
};
export default App;
