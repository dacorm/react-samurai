import axios from "axios";
import {InferActionsTypes} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const RESET_USER_DATA = 'RESET_USER_DATA';

export type profileType = {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
}

const initialState = {
    profile: null as null | profileType,
    userId: null  as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    // isFetching: false,
};


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case RESET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        default:
            return state;
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null) => ({type: 'SET_USER_DATA', data: {userId, email, login}}) as const,
    setUserProfile: (profile: profileType) => ({type: SET_USER_PROFILE, profile}) as const,
    resetUserData: (userId: number | null, email: string | null, login: string | null) => ({type: RESET_USER_DATA, data: {userId, email, login}}) as const
}

export const setUserData = (userId: number | null, email: string | null, login: string | null) => ({type: 'SET_USER_DATA', data: {userId, email, login}})
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile})
export const resetUserData = (userId: number | null, email: string | null, login: string | null) => ({type: RESET_USER_DATA, data: {userId, email, login}})

export const authThunk = () => (dispatch: any) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    }).then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data;
            dispatch(setUserData(id, email, login));
        }
    })
}

export const setUserThunk = (userId: number | null) => (dispatch: any) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => dispatch(setUserProfile(response.data)))
}

export const loginThunk = (email: string | null, password: string | null, rememberMe = false) => (dispatch: any) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe}, {
        withCredentials: true
    })
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            }
        })
}

export const logoutThunk = () => (dispatch: any) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
        withCredentials: true
    })
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(resetUserData(null, null, null))
            }
        })
}

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>