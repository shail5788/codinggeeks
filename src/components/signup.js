import React from "react";
import LoginSignUpTab from './loginSignUpTab';

const SingUp = ({ classes }) => {
  return (
    <div>
      <div className="login-sec">
      <LoginSignUpTab />
      <div className="sign_in_sec" id="tab-2">
       
        {/*signup-tab end*/}
        <div className="dff-tab current" id="tab-3">
          <h3>Sign Up</h3>
          <form>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" name="name" placeholder="Full Name" />
                  <i className="la la-user" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" name="email" placeholder="email" />
                  <i className="la la-globe" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" name="username" placeholder="User Handle Name" />
                  <i className="la la-user" />
                </div>
              </div>
              
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat Password"
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
        {/*dff-tab end*/}
        <div className="dff-tab" id="tab-4">
          <form>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="company-name"
                    placeholder="Company Name"
                  />
                  <i className="la la-building" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" name="country" placeholder="Country" />
                  <i className="la la-globe" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat Password"
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input type="checkbox" name="cc" id="c3" />
                    <label htmlFor="c3">
                      <span />
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise Terms &amp;
                      Conditions.
                    </small>
                  </div>
                  {/*fgt-sec end*/}
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div> 
  );
};

export default SingUp;
