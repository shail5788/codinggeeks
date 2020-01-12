import React from 'react';
import UserProfileData from './userPofileData';
import Suggestion from './suggestion';

const SideBar=()=>{

    return (
        <div>
           <div className="main-left-sidebar no-margin">
                <UserProfileData />
                <Suggestion />
          </div> 
        </div>

    )
}

export default SideBar;