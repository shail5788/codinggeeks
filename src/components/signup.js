import React,{useState} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import LoginSignUpTab from './loginSignUpTab';
import {userSignUp} from "../actions/authAction";

const SingUp = ({ classes ,userSignUp}) => {

  const [formData,setFormData]=useState({

      name:"",
      handle:"",
      email:"",
      password:"",
      repeatPassword:""
  })
  const {name,handle,email,password,repeatPassword}=formData;
  const onChange=e=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  const SingUp=e=>{
    e.preventDefault();
    userSignUp(formData)
    //console.log(formData);
  }
  return (
    <div>
      <div className="login-sec">
      <LoginSignUpTab />
      <div className="sign_in_sec" id="tab-2">
       
        {/*signup-tab end*/}
        <div className="dff-tab current" id="tab-3">
          <h3>Sign Up</h3>
          <form onSubmit={e=>SingUp(e)}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text"
                    name="name"
                    value={name}
                    onChange={e=>onChange(e)}
                    placeholder="Full Name"
                    required />
                  <i className="la la-user" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    placeholder="email" />
                  <i className="la la-globe" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input 
                      type="text"
                      name="handle"
                      value={handle}
                      onChange={e=>onChange(e)}
                      placeholder="User Handle Name" />
                  <i className="la la-user" />
                </div>
              </div>
              
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    placeholder="Password"
                  />
                  <i className="la la-lock" />
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={e=>onChange(e)}
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
        
      </div>
    </div>
   </div> 
  );
};
SingUp.propTypes={
  userSignUp:PropTypes.func.isRequired
}
export default connect(null,{userSignUp})(SingUp);
