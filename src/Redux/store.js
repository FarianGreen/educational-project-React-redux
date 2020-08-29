import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sitebarReducer from "./sitebar-reducer";


let store = {
    _state:{
        profilePage:{
            PostMessage: [
                {id:1,   message:'Hallo', likesCount: 2, like: 'Like'},
                {id:2,   message:'I say', likesCount: 13, like: 'Like'}],
            newPostText: "Propsss"
        },
        messagePage:{
            messageData: [
            {id:1,   message:'Hallo'},
            {id:2,   message:'I say'},
            {id:3,   message:'Hallo'}], 

            
            dialogsData: [
            {id:1,   name:'Dimon'},
            {id:2,  name:'Artem'},
            {id:3,   name:'Archi'},
            {id:4,  name:'Nazar'},
            {id:5,  name:'Victor'}],
            newMessagText: "sevnt"
           },
           
        sitebar:{
            friends: [
            {id:1,   friend:'Andrew'},
            {id:2,   friend:'Nikola'},
            {id:3,   friend:'Ann'}]
        }
    
        
        },
    _callsubscriber() {},

    getState() {
            return this._state;
        },
    subscribe (observer)  {
            this._callsubscriber = observer;
    } ,   
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        this._callsubscriber(this._state)
    }
}





   export default store;