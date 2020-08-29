import React from 'react';
import './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, updateStatus, getStatus} from '../../Redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

componentDidMount(){
  
  let userId = this.props.match.params.userId;
  if(!userId){
    
    userId= this.props.AuthorizedId;
    if(!userId){
      
      this.props.history.push("/login");
    }
  }
  this.props.getUserProfile(userId);
  this.props.getStatus(userId);
}


  render() {
    
    return(
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus}
      />

  )
  }
}

 let mapStateToProps = (state)=>({
   profile: state.profilePage.profile,
   status: state.profilePage.status, 
   AuthorizedId: state.auth.userId,
   isAuth: state.auth.isAuth
 })

 export default compose(connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),withRouter)(ProfileContainer)

 