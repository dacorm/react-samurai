import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


const ProfileContainer = (props) => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id ?? 2}`).then(response => props.setUserProfile(response.data))
    }, [])

    return (
    <Profile setUserProfile={props.setUserProfile} profile={props.profile} />
    );
}
;


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);