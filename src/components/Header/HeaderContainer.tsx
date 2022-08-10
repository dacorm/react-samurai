import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authThunk, loginThunk, logoutThunk, setUserData, setUserProfile, setUserThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderProps = {
    authThunk: () => void
    isAuth: boolean
    login: string
    setUserThunk: (userId: number | null) => void
    id: number | null
    logoutThunk: () => void
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
    // @ts-ignore
    authThunk, setUserThunk, loginThunk, logoutThunk})(HeaderContainer);