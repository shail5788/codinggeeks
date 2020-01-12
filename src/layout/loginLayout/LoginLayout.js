import React from "react";
import LoginBanner from '../../components/loginBanner';
const LoginLayout = ({ children }) => (
  <div>
    <div className="wrapper sign-in">
      <div className="sign-in-page">
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-md-6">
               <LoginBanner /> 
              </div>
              <div className="col-md-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginLayout;
