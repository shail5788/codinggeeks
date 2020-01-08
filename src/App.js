import React from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./layout/loginLayout/LoginLayout";  
import DashboardLayoutRoute from "./layout/dashboadLayout/DashboardLayoutRoute";  
  
/** Components **/  
import LoginPage from './LoginPage';  
import UserPage from './UserPage';  

  
/* 
   App 
 */  
const App =({classs})=>{
   return (
     
       <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/login" />  
          </Route>  
         
          <LoginLayoutRoute path="/login" component={LoginPage} />  
          <DashboardLayoutRoute path="/dashboard" component={UserPage} />  
        </Switch>  
      </Router> 
   )
}
export default App;   