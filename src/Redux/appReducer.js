import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";
import { getUserData } from "./Auth-reducer";

const SET_INITIALIZED = 'initialized';



let initialState ={
  initialized:false
}



const APPreducer = (state = initialState, action) =>{
    
    switch (action.type){
        case SET_INITIALIZED:{
            return{
                ...state,
                initialized: true
            }
            };
        default:
            return state;
    }

    
}

export const SetIitializedComplete =()=>{
    return{
        type: SET_INITIALIZED
    }
}

export const APPinitialized =()=>(dispatch)=>{
   let promise = dispatch(getUserData());
 
   Promise.all ([promise])
   .then(()=>{
       dispatch(SetIitializedComplete ());
   })
}



export default APPreducer;