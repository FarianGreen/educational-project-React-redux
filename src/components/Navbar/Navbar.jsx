import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from './Navfriend.jsx'




const Navbar = (props) => {
  
  
        let state =props.sidebar;
        let NavFriends=state.friends.map( elment => <NavFriend friend={elment.friend}/>)
        
        return(
          <nav className ={classes.nav}>
         <ul className={classes.item}>
           <li><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></li>
           <li><NavLink to='/dialogs' activeClassName={classes.active}>Massege</NavLink></li>
           <li><NavLink to='/content' activeClassName={classes.active}>Content</NavLink></li>
           <li><NavLink to='/musick' activeClassName={classes.active}>Musick</NavLink></li>
           <li><NavLink to='/seting' activeClassName={classes.active}>Setings</NavLink></li>
           <li><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></li>
         </ul>
         Top friends
         <div className={classes.friend}>{NavFriends}</div>
         </nav>
         )
      }
      
    
  
  
  
  

    


export default Navbar;