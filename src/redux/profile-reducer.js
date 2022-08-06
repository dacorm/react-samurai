
const initialState = {
    posts: [{message: 'Hey its my first post', id: 1}, {message: 'Im writing social network', id: 2},],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    if (action.type === 'ADD-POST') {
        const newMsg = { message: state.newPostText, id: `${state.posts.length} + 1`};
        stateCopy.posts = [...state.posts]
        stateCopy.posts.unshift(newMsg);
    } else if (action.type === 'UPDATE-POST-TEXT') {
        stateCopy.newPostText = action.newText
    } else if (action.type === 'SET_USER_PROFILE') {
        stateCopy.profile = action.profile
    }

    return stateCopy
}

export const updatePostTextActionCreator = (text) => {
    return {type: 'UPDATE-POST-TEXT', newText: text}
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export const setUserProfile = (profile) => {
    return {type: 'SET_USER_PROFILE', profile}
}

export default profileReducer