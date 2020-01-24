import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import SideBar from "./sideBar";
import ContentTab from "./contentTab";
import NabBar from "../dashboard/navbar";
import AccSetting from "./accSetting";
import ChangePassword from "./ChangePassword";
const AccountSetting = ({ match: { url } }) => {
  useEffect(() => console.log(url));
  return (
    <div>
      <NabBar />
      <section className="profile-account-setting">
        <div className="container">
          <div className="account-tabs-setting">
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <SideBar url={url} />
              </div>
              <div className="col-md-9 col-lg-9">
                <div className="tab-content" id="nav-tabContent">
                  <Router>
                    <Switch>
                      <Route
                        path="/account/account-setting"
                        exact
                        component={AccSetting}
                      />
                      <Route
                        path="/account/change-password"
                        exact
                        component={ChangePassword}
                      />
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSetting;
