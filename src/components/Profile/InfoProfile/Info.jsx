import React from 'react';
import Preloader from '../../Common/Preloader.js';
import StatusProfileHOC from './ProfileStatusHOC.jsx';

        
        
const Info =(props)=> {
  if(!props.profile){
    return(<Preloader/>)
  }
    return(
        <div>
        <div>
        <img src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
      </div>
      <div >
        ava + description
      </div>
      <img src={props.profile.photos.large}/>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.fullName}</div>
      
      <div><StatusProfileHOC status={props.status} updateStatus={props.updateStatus}/></div>
      </div>
        )
    }

    export default Info;