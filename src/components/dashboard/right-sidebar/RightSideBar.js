import React from 'react';
import WidgetAbout from './widgetAbout';
import PopularPost from './popularPost';
import TopViewPost from './topViewPost';
import TopViewPeople from './topViewPeople';

const RightSideBar=()=>{

    return(
        <div className="right-sidebar">
            <WidgetAbout />
            <PopularPost />
            <TopViewPost />
            <TopViewPeople />
        </div>
    )
}
export default RightSideBar;