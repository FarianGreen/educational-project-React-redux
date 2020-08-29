import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_DATA_USER = 'SET-USER';



let initialState ={
    userId: null,
    email: null,
    login: null,
    isAuth: false
}



const Authreducer = (state = initialState, action) =>{
    
    switch (action.type){
        case SET_DATA_USER:{
            return{
                ...state,
                ...action.data,
            }
            };
        default:
            return state;
    }

    
}

export const SetUserData =(userId, email, login, isAuth)=>{
    return{
        type: SET_DATA_USER,
        data: {userId, email, login, isAuth}
    }
}

export const getUserData =()=>(dispatch)=>{
   return authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0){
          let {id, login, email}= response.data.data;
          dispatch(SetUserData(id, email, login, true));
        }
    });
}

export const login =(email, password, rememberMe)=>(dispatch)=>{
    authAPI.login( email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0){
          dispatch(getUserData())
        }
        else{
           let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch( stopSubmit("login", { _error: message }))
        }
    });
}

export const logout =()=>(dispatch)=>{
    authAPI.LogOut()
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(SetUserData(null, null, null, false))
        }
    });
}

export default Authreducer;