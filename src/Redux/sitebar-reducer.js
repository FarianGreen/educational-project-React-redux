const SITEBAR_FRIEND='SITEBAR-FRIEND';

let initialState = {
    friends: [
        {id:1,   friend:'Andrew'},
        {id:2,   friend:'Nikola'},
        {id:3,   friend:'Ann'}]
}

 const sitebarReducer =( state = initialState, action)=>{
   return state;
  
 }

export const TopFriend =()=>{
    return{
        type:SITEBAR_FRIEND
    }
}

export default sitebarReducer;