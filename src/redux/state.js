import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const store = {
    _state: {
        profilePage: {
            posts: [{message: 'Hey its my first post', id: 1}, {message: 'Im writing social network', id: 2},],
            newPostText: ""
        },
        dialogsPage: {
            message: [{author: 'Dmitry', text: 'I can have text inside', id: 1}, {
                author: 'Denis',
                text: 'I cannot have',
                id: 2
            }],
            users: [{name: 'Andrew', id: 1}, {name: 'Petr', id: 2}, {name: 'Demetro', id: 3}, {name: 'Max', id: 4},],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    _rerender() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerender = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerender(this._state);
    }
}
export const updatePostTextActionCreator = (text) => {
    return {type: 'UPDATE-POST-TEXT', newText: text}
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export const updateMessageTextActionCreator = (text) => {
    return {type: 'UPDATE-MESSAGE-TEXT', newText: text}
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'}
}


export default store
