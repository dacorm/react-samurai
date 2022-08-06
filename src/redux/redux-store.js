import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers);

window.store = store

export default store