import { userAPI } from "../API/api";

const set_Users = 'setUsers';
const FOLLOW = 'Follow';
const UNFOLOW ='Unfollow';
const SETCurrentPage= 'SetCurrentPage';
const set_Total_Users_Count = 'totalUserscount'
const TOGGLE_IS_FETCHING = 'toggleFetching'
const TOGGLE_FOLLOWING_PROGRES = 'followingInProgress'

let initialState = {
    users:[],
    pageSize: 10,
    TotalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer =(state=initialState ,action)=>{
    switch(action.type) {
        case FOLLOW:
            return{
               ...state,
               users: state.users.map( u => {
                   if (u.id === action.userID){
                       return {...u, followed: true }
                   }
                   return u;
               })
            }
               
        case UNFOLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID){
                        return {...u, followed: false }
                    }
                    return u;
                })
             }
        case set_Users: {
            return{
                ...state, users: action.users
            }
        
        }
        case SETCurrentPage: {
            return{
                ...state,currentPage: action.currentPage
            }
        }
        case set_Total_Users_Count: {
            return{
                ...state,TotalUsersCount: action.TotalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return{
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRES: {
            return{
                ...state, followingInProgress: action.isFetching 
                ?[...state.followingInProgress, action.userID]
                : state.followingInProgress.filter(id=> id !=action.userID)
            }
        }
        default:
            return state;
    }

}

export const setusers = (users) => {
    return{
    type: set_Users, users
}
}
export const followSuccses =(userID)=>{
    return{
       type: FOLLOW, userID
    } 
} 
export const unfollowSuccses =(userID)=>{
   return{
       type: UNFOLOW, userID
   }
}
export const SetCurrentPage =(currentPage)=>{
    return{
        type: SETCurrentPage, currentPage
    }
}
export const SetTotalUsersCount =(TotalUsersCount)=>{
    return{
        type: set_Total_Users_Count, TotalUsersCount
    }
}
export const Fetching = (isFetching)=>{
    return{
        type:TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleFollowingInProgress = (isFetching, userID)=>{
    return{
        type:TOGGLE_FOLLOWING_PROGRES, isFetching, userID
    }
}


export const RequestUsers = (currentPage, pageSize)=>{
   return(dispatch)=>{
       dispatch(Fetching(true));
       dispatch(SetCurrentPage(currentPage));
    userAPI.getUser (currentPage, pageSize).then(data => {
        dispatch(Fetching(false))
        dispatch(setusers(data.items ));
        dispatch(SetTotalUsersCount(data.totalCount ));
    });
}
}

export const follow = (userID)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingInProgress(true, userID))
        userAPI.follow(userID).then(response => {
             if(response.data.resultCode == 0) {
                dispatch(followSuccses(userID));
             }
            dispatch(toggleFollowingInProgress (false,userID))
            });
 }
 }

 export const unfollow = (userID)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingInProgress(true, userID))
        userAPI.unfollow(userID)
        .then(response => {
             if(response.data.resultCode == 0) {
                dispatch(unfollowSuccses(userID));
             }
            dispatch(toggleFollowingInProgress(false, userID))
            });
 }
 }

export default usersReducer;