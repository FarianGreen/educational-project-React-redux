import { createSelector } from "reselect";


export const GetPageSize =(state)=>{
    return state.usersPage.pageSize;
}

export const GetTotalUsersCount =(state)=>{
    return  state.usersPage.TotalUsersCount;
}

export const GetCurrentPage =(state)=>{
    return  state.usersPage.currentPage;
}

export const GetFetching =(state)=>{
    return  state.usersPage.isFetching;
}

export const GetfollowingInProgress =(state)=>{
    return   state.usersPage.followingInProgress;
}



const getuserSelector = (state)=>{
    return state.usersPage.users;
}


export const GetUsers = createSelector(getuserSelector, (users)=>{
    return users.filter(u => true);
})