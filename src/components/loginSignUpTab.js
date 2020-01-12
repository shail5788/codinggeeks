import React from 'react';
import {NavLink} from 'react-router-dom';

const LoginSignUpTab=()=>{
     
    return (
        <div>
            <ul className="sign-control">
                <li data-tab="tab-1" >
                <NavLink to="/login" activeClassName='current'>Sign in</NavLink>
                </li>
                <li data-tab="tab-2">
                <NavLink to="/signup" activeClassName='current'>Sign up</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default LoginSignUpTab;