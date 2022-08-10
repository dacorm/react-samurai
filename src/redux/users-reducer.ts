import axios from "axios";
import {InferActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type PhotosType = {
    small: string | null
    large: string | null
}

const usersReducer = (state = initialState, action: ActionsType) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case SET_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const actions = {
    follow: (userId: number) => ({type: FOLLOW, userId }) as const,
    unfollow: (userId: number) => ({type: UNFOLLOW, userId }) as const,
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage }) as const,
    setUsers: (users: UserType[]) => ({type: SET_USERS, users }) as const,
    setTotalUsersCount: (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}) as const,
    setFetching: (isFetching: boolean) => ({type: SET_FETCHING, isFetching}) as const,
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}) as const
}

export const follow = (userId: number) => ({type: FOLLOW, userId })
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId })
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users })
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setFetching = (isFetching: boolean) => ({type: SET_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(setFetching(true));
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d"
        }
    }).then(response => {
        dispatch(setFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    })
}

export const unfollowThunk = (userId: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d"
        }
    }).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollow(userId));
            dispatch(toggleFollowingProgress(false, userId));
        }
    })
}

export const followThunk = (userId: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "a2436f78-f724-455c-84e1-5fdca026437d"
        }
    }).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(follow(userId))
            dispatch(toggleFollowingProgress(false, userId));
        }
    })
}

export default usersReducer;
type ActionsType = InferActionsTypes<typeof actions>