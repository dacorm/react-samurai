import axios from "axios";
import {profileType} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

const initialState = {
    posts: [{message: 'Hey its my first post', id: 1}, {message: 'Im writing social network', id: 2},] as Array<messages>,
    newPostText: "" as string,
    profile: null as null | profileJson,
    status: '' as string,
}

type messages = {
    message: string
    id: number | string
}

type extendedProfileType = {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
}

type profileJson = {
    userId: number | null
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: contactsType
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
    photos?: object

}

type contactsType = {
    lookingForAJobDescription: string
    facebook: string
    github: string
    instagram: string
    twitter: string
    vk: string
    lookingForAJob: boolean
}

const profileReducer = (state = initialState, action: ActionsType) => {
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
        stateCopy.profile!.photos = action.photos
    }

    return stateCopy
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'ADD-POST', newPostText}) as const,
    setUserProfile: (profile: profileType) => ({type: 'SET_USER_PROFILE', profile}) as const,
    setUserStatus: (status: string) => ({type: 'SET_USER_STATUS', status}) as const,
    setUserAvatar: (photos: File) => ({type: 'SET_USER_AVATAR', photos}) as const
}

export const addPostActionCreator = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText}
}

export const setUserProfile = (profile: profileType) => {
    return {type: 'SET_USER_PROFILE', profile}
}

export const setUserStatus = (status: string) => {
    return {type: 'SET_USER_STATUS', status}
}

export const setUserAvatar = (photos: File) => {
    return {type: 'SET_USER_AVATAR', photos}
}


export const setUserProfileThunk = (userId: number) => (dispatch: any) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 2}`, {
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => dispatch(setUserProfile(response.data)))
}

export const setUserStatusThunk = (userId: number) => (dispatch: any) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => dispatch(setUserStatus(response.data)))
}

export const updateUserStatusThunk = (status: string) => (dispatch: any) => {
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

export const updateUserAvatarThunk = (photos: File) => (dispatch: any) => {

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
            if (response.data.resultCode === 0) {
                dispatch(setUserAvatar(response.data.data.photos))
            }
        })
}

export const updateUserProfileThunk = (profile: extendedProfileType) => (dispatch: any) => {
    axios.put(`https://social-network.samuraijs.com/api/1.0/profile/`, {
        userId: profile.userId,
        AboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        LookingForAJobDescription: profile.lookingForAJobDescription,
        fullName: profile.fullName,
        contacts: profile.contacts,
    }, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfileThunk(profile.userId))
            }
        })
}

export default profileReducer

type ActionsType = InferActionsTypes<typeof actions>