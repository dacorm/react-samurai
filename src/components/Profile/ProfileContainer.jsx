import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunk} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


const ProfileContainer = (props) => {
    const { id } = useParams();

    useEffect(() => {
        props.setUserProfileThunk(id);
    }, [id])

    return (
    <Profile setUserProfile={props.setUserProfile} profile={props.profile} isAuth={props.isAuth} />
    );
}
;


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {setUserProfile, setUserProfileThunk})(ProfileContainer);