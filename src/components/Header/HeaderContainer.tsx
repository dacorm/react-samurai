import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect, useSelector} from "react-redux";
import {authThunk, loginThunk, logoutThunk, setUserData, setUserProfile, setUserThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {selectIsAuth} from "../../redux/auth-selectors";
import {AnyAction} from "redux";

type HeaderProps = {
    authThunk: () => void
    isAuth: boolean
    login: string
    setUserThunk: (userId: number | null) => void
    id: number | null
    logoutThunk: () => AnyAction
}

const HeaderContainer: React.FC<HeaderProps> = (props) => {

    useEffect(() => {
        props.authThunk();
    }, [])

    return (
        <Header {...props} />
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId
})


export default connect(mapStateToProps, {setUserData, setUserProfile,
    authThunk,
    setUserThunk,
    loginThunk,
    logoutThunk})
    // @ts-ignore
    (HeaderContainer);