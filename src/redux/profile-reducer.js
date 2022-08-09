import axios from "axios";

const initialState = {
    posts: [{message: 'Hey its my first post', id: 1}, {message: 'Im writing social network', id: 2},],
    newPostText: "",
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    if (action.type === 'ADD-POST') {
        const newMsg = { message: action.newPostText, id: `${state.posts.length} + 1`};
        stateCopy.posts = [...state.posts]
        stateCopy.newPostText = ''
        stateCopy.posts.unshift(newMsg);
    } else if (action.type === 'SET_USER_PROFILE') {
        stateCopy.profile = action.profile
    } else if (action.type === 'SET_USER_STATUS') {
        stateCopy.status = action.status
    } else if (action.type === 'SET_USER_AVATAR') {
        stateCopy.profile.photos = action.photos
    }

    return stateCopy
}


export const addPostActionCreator = (newPostText) => {
    return {type: 'ADD-POST', newPostText}
}

export const setUserProfile = (profile) => {
    return {type: 'SET_USER_PROFILE', profile}
}

export const setUserStatus = (status) => {
    return {type: 'SET_USER_STATUS', status}
}

export const setUserAvatar = (photos) => {
    return {type: 'SET_USER_AVATAR', photos}
}

export const setUserProfileThunk = (userId) => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 2}`, {
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => dispatch(setUserProfile(response.data)))
}

export const setUserStatusThunk = (userId) => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => dispatch(setUserStatus(response.data)))
}

export const updateUserStatusThunk = (status) => (dispatch) => {
    axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, { status: status }, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const updateUserAvatarThunk = (photos) => (dispatch) => {

    axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, {
        'image': photos
    }, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            console.log('notez')
            if (response.data.resultCode === 0) {
                console.log('ez')
                dispatch(setUserAvatar(response.data.data.photos))
            }
        })
}

export default profileReducer