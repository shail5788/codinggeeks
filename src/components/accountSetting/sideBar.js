import React from "react";
import { Link } from "react-router-dom";
const SideBar = ({ url }) => {
  return (
    <div className="acc-leftbar">
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link
          className="nav-item nav-link active"
          id="nav-acc-tab"
          data-toggle="tab"
          to={`${url}/account-setting`}
          role="tab"
          aria-controls="nav-acc"
          aria-selected="true"
        >
          <i className="la la-cogs" />
          Account Setting
        </Link>
        <a
          className="nav-item nav-link"
          id="nav-status-tab"
          data-toggle="tab"
          href="#nav-status"
          role="tab"
          aria-controls="nav-status"
          aria-selected="false"
        >
          <i className="fa fa-line-chart" />
          Status
        </a>
        <a
          className="nav-item nav-link"
          id="nav-password-tab"
          data-toggle="tab"
          href="#nav-password"
          role="tab"
          aria-controls="nav-password"
          aria-selected="false"
        >
          <i className="fa fa-lock" />
          Change Password
        </a>
        <a
          className="nav-item nav-link"
          id="nav-notification-tab"
          data-toggle="tab"
          href="#nav-notification"
          role="tab"
          aria-controls="nav-notification"
          aria-selected="false"
        >
          <i className="fa fa-flash" />
          Notifications
        </a>
        <a
          className="nav-item nav-link"
          id="nav-privcy-tab"
          data-toggle="tab"
          href="#privcy"
          role="tab"
          aria-controls="privacy"
          aria-selected="false"
        >
          <i className="fa fa-group" />
          Requests
        </a>
        <a
          className="nav-item nav-link"
          id="security"
          data-toggle="tab"
          href="#security-login"
          role="tab"
          aria-controls="security-login"
          aria-selected="false"
        >
          <i className="fa fa-user-secret" />
          Security and Login
        </a>
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
        <a
          className="nav-item nav-link"
          id="nav-deactivate-tab"
          data-toggle="tab"
          href="#nav-deactivate"
          role="tab"
          aria-controls="nav-deactivate"
          aria-selected="false"
        >
          <i className="fa fa-random" />
          Deactivate Account
        </a>
      </div>
    </div>
  );
};

export default SideBar;
