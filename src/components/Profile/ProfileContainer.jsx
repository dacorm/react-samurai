import React from 'react';
import styles from './Profile.module.css'
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

export default ProfileContainer;