import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    setUserProfile,
    setUserProfileThunk,
    setUserStatusThunk, updateUserAvatarThunk, updateUserContactsThunk, updateUserProfileThunk,
    updateUserStatusThunk
} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {authRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
        const {id} = useParams();


        useEffect(() => {
            props.setUserProfileThunk(id);
            props.setUserStatusThunk(id);
        }, [id])

        return (
            <Profile setUserProfile={props.setUserProfile} profile={props.profile} isAuth={props.isAuth}
                     status={props.status} updateStatus={props.updateUserStatusThunk} id={id} userId={props.userId}
                     updateUserAvatarThunk={props.updateUserAvatarThunk} updateUserProfileThunk={props.updateUserProfileThunk}
            login={props.login}
            />
        );
    }
;


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    login: state.auth.login
})


export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserProfileThunk,
        setUserStatusThunk,
        updateUserStatusThunk,
        updateUserAvatarThunk,
        updateUserProfileThunk
    }),
    authRedirect,
)(ProfileContainer);