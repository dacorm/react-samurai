import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    messages,
    profileJson,
    setUserProfile,
    setUserProfileThunk,
    setUserStatusThunk,
    updateUserAvatarThunk,
    updateUserProfileThunk,
    updateUserStatusThunk
} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {authRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../redux/auth-reducer";

type ProfileContainerProps = {
    setUserProfileThunk: (id: string | undefined) => void
    setUserStatusThunk: (id: string | undefined) => void
    setUserProfile: (profile: profileType) => void
    updateUserStatusThunk: () => void
    profile: profileJson
    isAuth: boolean
    status: string
    userId: number
    updateUserAvatarThunk: () => void
    updateUserProfileThunk: () => void
    login: string
    id: string | undefined
    posts: messages[]
}

const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
        const {id} = useParams();


        useEffect(() => {
            props.setUserProfileThunk(id);
            props.setUserStatusThunk(id);
        }, [id])

        return (
            <Profile setUserProfile={props.setUserProfile} profile={props.profile} isAuth={props.isAuth}
                     status={props.status} updateStatus={props.updateUserStatusThunk} id={id} userId={props.userId}
                     updateUserAvatarThunk={props.updateUserAvatarThunk} updateUserProfileThunk={props.updateUserProfileThunk}
            login={props.login} posts={props.posts}
            />
        );
    }
;


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    posts: state.profileReducer.posts,
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