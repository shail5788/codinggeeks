import React from 'react';
import  {Route} from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

const DashboardLayoutRoute=({component:Component, ...rest})=>{

    return (

        <Route {...rest} render={matchProps=>(
            <DashboardLayout>
                  <Component {...matchProps}/>
            </DashboardLayout>
        )}></Route>
    )
}

export default DashboardLayoutRoute;