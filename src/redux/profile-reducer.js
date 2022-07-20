
const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        const newMsg = { message: state.newPostText, id: `${state.posts.length} + 1`}
        state.posts.unshift(newMsg);
    } else if (action.type === 'UPDATE-POST-TEXT') {
        state.newPostText = action.newText
    }

    return state
}

export default profileReducer