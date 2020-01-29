import React from "react";
import AccSetting from "./accSetting";
import ChangePassword from "./ChangePassword";
import Notification from "./notification";
import Request from "./request";
import SecurityLogin from "./securityLogin";
import DeactivateAccount from "./deactivateAccount";
const MainTab = ({ match }) => {
  return (
    <div>
      {(match.params.child == "account-setting" && <AccSetting />) ||
        (match.params.child == "change-password" && <ChangePassword />) ||
        (match.params.child == "notification" && <Notification />) ||
        (match.params.child == "request" && <Request />) ||
        (match.params.child == "security-and-login" && <SecurityLogin />) ||
        (match.params.child == "deactivate-account" && <DeactivateAccount />)}
    </div>
  );
};

export default MainTab;
