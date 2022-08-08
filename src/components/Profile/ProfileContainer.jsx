import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    setUserProfile,
    setUserProfileThunk,
    setUserStatusThunk,
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
                     status={props.status} updateStatus={props.updateUserStatusThunk} id={id}/>
        );
    }
;


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect(mapStateToProps, {setUserProfile, setUserProfileThunk, setUserStatusThunk, updateUserStatusThunk}),
    authRedirect,
)(ProfileContainer);