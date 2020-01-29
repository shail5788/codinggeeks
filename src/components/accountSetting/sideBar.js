import React from "react";
import { Link, NavLink } from "react-router-dom";
const SideBar = ({ url }) => {
  return (
    <div className="acc-leftbar">
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <NavLink
          className="nav-item nav-link "
          activeClassName="active"
          id="nav-acc-tab"
          to={`${url}/account-setting`}
        >
          <i className="la la-cogs" />
          Account Setting
        </NavLink>
        <NavLink
          className="nav-item nav-link"
          id="nav-status-tab"
          activeClassName="active"
          to={`${url}/status`}
        >
          <i className="fa fa-line-chart" />
          Status
        </NavLink>
        <NavLink
          className="nav-item nav-link"
          id="nav-password-tab"
          activeClassName="active"
          to={`${url}/change-password`}
        >
          <i className="fa fa-lock" />
          Change Password
        </NavLink>
        <NavLink
          className="nav-item nav-link"
          activeClassName="active"
          id="nav-notification-tab"
          to={`${url}/notification`}
        >
          <i className="fa fa-flash" />
          Notifications
        </NavLink>
        <NavLink
          className="nav-item nav-link"
          id="nav-privcy-tab"
          activeClassName="active"
          to={`${url}/request`}
        >
          <i className="fa fa-group" />
          Requests
        </NavLink>
        <NavLink
          className="nav-item nav-link"
          id="security"
          activeClassName="active"
          to={`${url}/security-and-login`}
        >
          <i className="fa fa-user-secret" />
          Security and Login
        </NavLink>
        <a
          className="nav-item nav-link"
          id="nav-privacy-tab"
          data-toggle="tab"
          href="#privacy"
          role="tab"
          aria-controls="privacy"
          aria-selected="false"
        >
          <i className="fa fa-paw" />
          Privacy
        </a>
        <a
          className="nav-item nav-link"
          id="nav-blockking-tab"
          data-toggle="tab"
          href="#blockking"
          role="tab"
          aria-controls="blockking"
          aria-selected="false"
        >
          <i className="fa fa-cc-diners-club" />
          Blocking
        </a>
        <NavLink
          className="nav-item nav-link"
          id="nav-deactivate-tab"
          activeClassName="active"
          to={`${url}/deactivate-account`}
        >
          <i className="fa fa-random" />
          Deactivate Account
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
