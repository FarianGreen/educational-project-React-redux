import React from 'react';
import classes from './Navbar.module.css';

const NavFriend = (props)=>{

    return(
        <div className={classes.circle}>{props.friend}</div>
     )
    }
    export default NavFriend 