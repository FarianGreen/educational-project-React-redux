import React, { Component } from 'react';
import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import Musick from './components/Musick/Musick';
import Content from './components/Content/Content';
import Seting from './components/Seting/Seting';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/Profilecontainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { APPinitialized } from './Redux/appReducer';
import Preloader from './components/Common/Preloader';





class  App extends Component {
  componentDidMount() { 
    this.props.APPinitialized()
}

  render(){
    if(!this.props.initialized) {
      return<Preloader/>}

  return (
    <BrowserRouter>
  <div className='app-wrapper'>
    <HeaderContainer/>
    <NavbarContainer/>
    <div className='app-wrapper-content'>
    <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
    <Route path='/dialogs' render={()=><DialogsContainer/>}/>
    <Route path='/content' render={Content}/>
    <Route path='/musick' render={Musick}/>
    <Route path='/seting' render={Seting}/>
    <Route path='/users' render={()=><UsersContainer/>}/>
    <Route path='/login' render={()=><Login/>}/>
    </div>
    </div>
    </BrowserRouter>
  );
}
}

let mapStateToProps = (state)=>(
{
  initialized: state.app.initialized
})

export default  connect (mapStateToProps, {APPinitialized})(App);
