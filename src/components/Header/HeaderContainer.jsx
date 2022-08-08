import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authThunk, loginThunk, logoutThunk, setUserData, setUserProfile, setUserThunk} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.authThunk();
    }, [])

    return (
        <Header {...props} />
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId
})

export default connect(mapStateToProps, {setUserData, setUserProfile,
    authThunk, setUserThunk, loginThunk, logoutThunk})(HeaderContainer);