const SEND_MESSAGE = 'SentMessage';
/*const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';*/



let initialState ={
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
        
}


const messageReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case SEND_MESSAGE:{
            let newMessage={
                id:4,
                message:action.newMessagText
            };
            
        return{
            ...state,
            messageData: [...state.messageData, newMessage],
        };
        }
       /* case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
            newMessagText: action.body
            }*/
        default:
            return state;
    }

    
}

export const SentMessageActionCreator =(newMessagText)=>{
    return{
        type: SEND_MESSAGE, newMessagText
    }
}
/*export const updateNewMessagActionCreator =(send)=>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT , body: send
    }
}*/ 
/*" обновляет каждое нажатие клавиши по flux в поле ввода"*/

export default messageReducer;