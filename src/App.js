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
import DashboardPage from "./components/dashboard/dashboad";
import AccountSetting from "./components/accountSetting/accountSetting";

/* 
   Redux stuff 
 */
import { Provider } from "react-redux";
import store from "./store";

const App = ({ classs }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <AppRoute path="/login" component={LoginPage} layout={LoginLayout} />
          <AppRoute path="/signup" component={SignUp} layout={LoginLayout} />
          <AppRoute
            path="/dashboard"
            component={DashboardPage}
            layout={DashboardLayout}
          />
          <AppRoute
            path="/account"
            component={AccountSetting}
            layout={DashboardLayout}
          />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
