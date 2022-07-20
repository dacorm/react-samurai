import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

const store = createStore(reducers);

export default store