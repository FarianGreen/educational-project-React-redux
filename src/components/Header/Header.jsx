import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  
    return(
    <header className={classes.header}>
      <img src ='https://avatars.mds.yandex.net/get-pdb/2883421/85c0dc11-9f9d-4292-8a5a-8c5968e922a8/s1200?webp=false'></img>
      <div className={classes.login}>
      {props.isAuth ? 
      <div>{props.login}- <button onClick={props.logout}>Exit</button></div> 
      : <NavLink to = {'/login'}>Login</NavLink>}
      </div>
    </header>
    )
}

export default Header;