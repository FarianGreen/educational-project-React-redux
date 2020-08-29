import React from 'react';
import { useState } from 'react';


const StatusProfileHOC = (props)=> {
 
    let [editMode, SetEditMode] =  useState(false);
    let [status, setStatus] = useState (props.status)

const activateEditMode=() =>{
        SetEditMode(true);
    }

const deactivateEditMode =()=> {
    SetEditMode(false)
    props.updateStatus(status);
}   

const onStatusChange=(e)=>{
    setStatus(e.currentTarget.value)
    }

return (
    
    <div>
        {!editMode &&
    <div>
        <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
    </div>
        }
        { editMode &&
    <div>
    <input autoFocus={true}  onBlur={deactivateEditMode}  onChange={onStatusChange} value={status}/>
    </div>
        }
</div>)

}





export default StatusProfileHOC;