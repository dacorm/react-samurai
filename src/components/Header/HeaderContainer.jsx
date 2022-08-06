import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData, setUserProfile} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const { id, login, email } = response.data.data;
                props.setUserData(id, email, login);
            }
        })
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

export default connect(mapStateToProps, {setUserData, setUserProfile})(HeaderContainer);