import React,{useState, Fragment} from 'react';
import CreatePost from './../createPost';

const PostTool=()=>{
    const [active,setActive]=useState('inactive');
    const [isOpen,setIsOpen]=useState(false);
    const openPopUp=()=>{
        setActive("active");
        setIsOpen(true); 
        
    }
    return (
        <Fragment>
             <div className="post-topbar">
            <div className="user-picy">
                <img src="images/resources/user-pic.png" alt="" />
            </div>
            <div className="post-st">
                <ul>
                    <li><button className="post_project" onClick={openPopUp}>Create Post</button></li>
                    {/* <li><button className="post-jb active">Post a Job</button></li> */}
                </ul>
            </div>
        </div>
        {isOpen}
       {isOpen ?(<CreatePost active={active}/>):('')}
        </Fragment>
       
                                 
    )

}

export default PostTool;