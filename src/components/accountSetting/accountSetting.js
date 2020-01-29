import React, { useEffect } from "react";
import DashboardLayout from "../../layout/dashboadLayout/DashboardLayout";
import AppRoute from "../../layout/AppRoute";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import SideBar from "./sideBar";

import NabBar from "../dashboard/navbar";

import MainTab from "./mainTab";
const AccountSetting = () => {
  let { path, url } = useRouteMatch();
  useEffect(() => console.log(url));
  return (
    <div>
      <NabBar />
      <section className="profile-account-setting">
        <div className="container">
          <div className="account-tabs-setting">
            <Router>
              <div className="row">
                <div className="col-md-3 col-lg-3">
                  <SideBar url={url} />
                </div>
                <div className="col-md-9 col-lg-9">
                  <div className="tab-content" id="nav-tabContent">
                    <AppRoute
                      path={`${path}/:child`}
                      exact
                      component={MainTab}
                      layout={DashboardLayout}
                    />
                  </div>
                </div>
              </div>
            </Router>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSetting;
