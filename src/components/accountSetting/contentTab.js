import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import AccSetting from "./accSetting";
import ChangePassword from "./ChangePassword";

const ContentTab = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <Router>
        <Switch>
          <Route path="/account/account-setting" exact component={AccSetting} />
          <Route
            path="/account/change-password"
            exact
            component={ChangePassword}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default ContentTab;
