
const initialState = {
    posts: [{message: 'Hey its my first post', id: 1}, {message: 'Im writing social network', id: 2},],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        const newMsg = { message: state.newPostText, id: `${state.posts.length} + 1`}
        state.posts.unshift(newMsg);
    } else if (action.type === 'UPDATE-POST-TEXT') {
        state.newPostText = action.newText
    }

    return state
}

export const updatePostTextActionCreator = (text) => {
    return {type: 'UPDATE-POST-TEXT', newText: text}
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export default profileReducer