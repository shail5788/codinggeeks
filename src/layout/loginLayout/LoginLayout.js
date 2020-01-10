import React from "react";
const LoginLayout = ({ children }) => (
  <div>
    <div className="wrapper sign-in">
      <div className="sign-in-page">
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-md-6">
                <div className="cmp-info">
                  <div className="cm-logo">
                    <img src="images/cm-logo.png" alt="" />
                    <p>
                      Workwise, is a global freelancing platform and social
                      networking where businesses and independent professionals
                      connect and collaborate remotely
                    </p>
                  </div>
                  <img src="images/cm-main-img.png" alt="" />
                </div>
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
