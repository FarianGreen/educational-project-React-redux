import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Utils/FormControl/From';
import { required } from '../../Utils/VL/Validators';



const DialogForm =(props)=>{
    return(
        <form onSubmit= {props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required]} name={"newMessagText"} placeholder={"Enter message"}/>
        </div>
        <div>
            <button >Send</button>
        </div>
        </form>
    )
    }
    
    export default reduxForm({form: 'Dialog'
    }) (DialogForm)