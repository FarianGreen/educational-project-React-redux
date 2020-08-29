import { userAPI, profileAPI } from "../API/api";

const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const Set_User_Profile ='setUserProfile';
const Set_Status ='setStatus';

let initialState = {
    PostMessage: [
        {id:1,   message:'Hallo', likesCount: 2, like: 'Like'},
        {id:2,   message:'I say', likesCount: 13, like: 'Like'}],
    profile: null,
    status:"",
}

const profileReducer =(state=initialState ,action)=>{

    switch(action.type) {
        case ADD_POST: {
            let newPost={
                id: 3,
                message:action.newPostText,
                likesCount:0,
                like:'Like'
            };
            return {
            ...state,
            PostMessage: [...state.PostMessage,newPost],
            }
        }
       /* case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
            newPostText: action.newText
            };
        }*/
        case Set_User_Profile:{
            return{
                ...state, profile: action.profile
            }
        }
        case Set_Status:{
            return{
                ...state, 
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator =(newPostText)=>{
    return{
       type: ADD_POST, newPostText
    } 
} 
/*export const updateNewPostActionCreator =(text)=>{
   return{
       type: UPDATE_NEW_POST_TEXT, newText: text
   }
}*/
export const setUserProfile =(profile)=>{
    return{
        type:Set_User_Profile, profile
    }
}
export const getUserProfile =(userId)=>(dispatch)=>{
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const setStatusAC =(status)=>{
    return{
       type: Set_Status , status 
    } 
}
export const getStatus =(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatusAC(response.data));
    });
}
export const updateStatus =(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
        }
    });
}
export default profileReducer;