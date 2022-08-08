import axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const RESET_USER_DATA = 'RESET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
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


export const setUserData = (userId, email, login) => ({type: 'SET_USER_DATA', data: {userId, email, login} })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const resetUserData = (userId, email, login) => ({type: RESET_USER_DATA, data: {userId, email, login} })

export const authThunk = () => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    }).then(response => {
        if (response.data.resultCode === 0) {
            const { id, login, email } = response.data.data;
            dispatch(setUserData(id, email, login));
        }
    })
}

export const setUserThunk = (userId) => (dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => dispatch(setUserProfile(response.data)))
}

export const loginThunk = (email, password, rememberMe = false) => (dispatch) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, { email, password, rememberMe }, {
        withCredentials: true
    })
        .then(response => {
            if (response.resultCode === 0) {
                console.log(response)
            dispatch(authThunk())
            }
        })
}

export const logoutThunk = () => (dispatch) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
        withCredentials: true
    })
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(resetUserData(null, null, null))
            }
        })
}

export default authReducer;