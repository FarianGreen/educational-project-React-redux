import loader from '../../assets/loader.gif';
import React from 'react';
import classes from '../Users/Users.module.css';


let Preloader =(props)=>{
    return(
    <img className={classes.preload} src={loader}/>)
     
}


export default Preloader;