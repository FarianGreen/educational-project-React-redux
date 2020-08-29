import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer"
import messageReducer from "./message-reducer"
import sitebarReducer from "./sitebar-reducer"
import usersReducer from "./Users-reducer";
import Authreducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import APPreducer from "./appReducer";

let reducers = combineReducers({
messagePage: messageReducer,
sitebar: sitebarReducer,
profilePage: profileReducer,
usersPage: usersReducer,
auth: Authreducer,
form: formReducer,
app:APPreducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store= store;

export default store;