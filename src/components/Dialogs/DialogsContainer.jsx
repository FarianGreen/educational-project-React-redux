import React from 'react';
import { SentMessageActionCreator, updateNewMessagActionCreator } from '../../Redux/message-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';


let mapStateToPropsforRedirect =(state) =>{
    return{
        isAuth:state.auth.isAuth
    }
}

let mapStateToProps =(state) =>{
    return{
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
       /* updateNewMessagActionCreator: (body)=>{
            dispatch(updateNewMessagActionCreator(body));
        },*/
        SentMessageActionCreator: (newMessagText)=>{
            dispatch(SentMessageActionCreator(newMessagText));
        }
    }
}



export default compose(withAuthRedirect, connect (mapStateToProps, mapDispatchToProps))(Dialogs);