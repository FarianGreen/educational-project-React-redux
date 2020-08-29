import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs_Items =(props)=> {
    let path = '/dialogs/'+ props.id
    return( 
    <div className={classes.dialog} >
    <NavLink to={path}activeClassName={classes.active}>{props.name}</NavLink>
        </div>
        )
}


        

export default Dialogs_Items;