import React from 'react';
import classes from './Dialogs.module.css';
import Dialogs_Items from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../Utils/FormControl/From';
import { required } from '../../Utils/VL/Validators';
import DialogForm from './MessageForm'

const Dialogs =(props)=> {
    
    let SendMessage =(values)=>{
        props.SentMessageActionCreator(values.newMessagText);
    }

    let state = props.messagePage;
    let newMessagText= state.newMessagText;

    /*let SentMessageClick=()=>{
       props.SentMessageActionCreator();
    }
    let sentChange=(e)=>{
        let body = e.target.value;
        props.updateNewMessagActionCreator(body);
    }*/
 

    let dialogsElements = state.dialogsData.map( dialog => <Dialogs_Items name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messageData.map( messageData => <Message message={messageData.message}/>)

    if (!props.isAuth) return <Redirect to ={"/login"}/>

return(
    
    <div className={classes.dialogs}>

        <div className={classes.dialogs_items}>     
         {dialogsElements}
        </div>

    
    <div className={classes.message}>
        {messagesElements}
    </div>
    <DialogForm onSubmit={SendMessage}/>
    </div>
)
}



export default Dialogs;