import React from 'react';
import './Profile.module.css';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Info from './InfoProfile/Info';



const Profile = (props) => {
  
 

  return(
        <div>
        Main content
        <Info profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
      </div>
  
    )
}

export default Profile;