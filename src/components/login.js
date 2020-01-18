import React,{useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginSignUpTab from './loginSignUpTab';
import {login} from "../actions/authAction";

const LoginPage = ({ classes,login,auth:{isAuthencated} }) => {
   const [formData,setFormData]=useState({
      email:'',
      password:''
   })
  
   const onChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
   }
   const onSubmit=async(e)=>{
      e.preventDefault();
      await login(formData)
   
     // console.log(formData)
   }
   if(isAuthencated){
      return <Redirect to="/dashboard" />
   }
   const {email,password}= formData;
  return (
    <div className="login-sec">
      <LoginSignUpTab />
      <div className="sign_in_sec current" id="tab-1">
        <h3>Sign in</h3>
        <form onSubmit={e=>onSubmit(e) }>
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input 
                  type="email"
                  name="email" 
                  value={email}
                  onChange={e=>onChange(e)}
                  placeholder="Username"
                  required

                   />
                <i className="la la-user" />
              </div>
              {/*sn-field end*/}
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input 
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={e=>onChange(e)}
                  placeholder="Password"
                  required 
                  />
                <i className="la la-lock" />
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="checky-sec">
                <div className="fgt-sec">
                  <input type="checkbox" name="cc" id="c1" />
                  <label htmlFor="c1">
                    <span />
                  </label>
                  <small>Remember me</small>
                </div>
                {/*fgt-sec end*/}
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <button type="submit" value="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        {/* <div className="login-resources">
          <h4>Login Via Social Account</h4>
          <ul>
            <li>
              <a href="#" className="fb">
                <i className="fa fa-facebook" />
                Login Via Facebook
              </a>
            </li>
            <li>
              <a href="#" className="tw">
                <i className="fa fa-twitter" />
                Login Via Twitter
              </a>
            </li>
          </ul>
        </div> */}
        {/*login-resources end*/}
      </div>
      {/*sign_in_sec end*/}
    </div>
  );
};
LoginPage.propType={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}
const mapStateToProp=state=>({
  auth:state.AuthReducer
})

export default connect(mapStateToProp,{login})(LoginPage);
