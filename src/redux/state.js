const store = {
    _state: {
        profilePage: {
            posts: [{ message: 'Hey its my first post', id: 1 },{ message: 'Im writing social network', id: 2 },],
            newPostText: ""
        },
        dialogsPage: {
            message: [{author: 'Dmitry', text: 'I can have text inside', id: 1}, {author: 'Denis', text: 'I cannot have', id: 2}],
            users: [{ name: 'Andrew', id: 1}, { name: 'Petr', id: 2}, { name: 'Demetro', id: 3}, { name: 'Max', id: 4},],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    _rerender() {
        console.log('state changed')
    },
    addPost() {
        const newMsg = { message: this._state.profilePage.newPostText, id: `${this._state.profilePage.posts.length} + 1`}
        this._state.profilePage.posts.unshift(newMsg);
        this._rerender(this._state, this.addPost, this.updatePostText);
    },
    addMessage() {
        const newMsg = {author: 'Dmitry', text: this._state.dialogsPage.newMessageText, id: `${this._state.dialogsPage.message.length} + 1`};
        this._state.dialogsPage.message.push(newMsg);
        this._rerender(this._state, this.addPost, this.updatePostText);
    },
    updateMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._rerender(this._state, this.addPost, this.updatePostText);
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerender(this._state, this.addPost, this.updatePostText);
    },
    subscribe(observer) {
        this._rerender = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.addPost();
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this.updatePostText(action.newText);
        } else if (action.type === 'ADD-MESSAGE') {
            this.addMessage();
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this.updateMessageText(action.newText)
        }
    }
}
export const updatePostTextActionCreator = (text) => {
    return { type: 'UPDATE-POST-TEXT', newText: text }
}

export const addPostActionCreator = () => {
    return { type: 'ADD-POST' }
}

export const updateMessageTextActionCreator = (text) => {
    return { type: 'UPDATE-MESSAGE-TEXT', newText: text }
}

export const addMessageActionCreator = () => {
    return { type: 'ADD-MESSAGE' }
}


export default store
