import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png';

const Profile = ({ profile, isAuth, status, updateStatus, id, userId, updateUserAvatarThunk }) => {
    const [owner, setOwner] = useState(false);
    const [visible, setVisible] = useState(false);

    const changeAvatarHandler = (e) => {
        if (e.target.files.length) {
            updateUserAvatarThunk(e.target.files[0]);
            setVisible(false);
        }
    }

    const isOwner = () => {
        if (id == userId) {
            setOwner(true);
        }
    }

    useEffect(() => {
        isOwner();
    }, [id])

    if (!profile) {
        return <Preloader />
    }


    return (
        <div className={styles.content}>
            <div className={styles.profileInfo}>
                <div className={styles.avatar} style={{backgroundImage: `url(${profile.photos.small ?? userPhoto})`}}/>
                <div className={styles.description}>
                    <p className={styles.text}>{profile.fullName}</p>
                    <ProfileStatus status={status} updateStatus={updateStatus} id={id} />
                    <p className={styles.text}>{profile.aboutMe}</p>
                    <p className={styles.text}>Facebook: <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></p>
                    <p className={styles.text}>Github: <a href={profile.contacts.github}>{profile.contacts.github}</a></p>
                    <p className={styles.text}>Instagram: <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a></p>
                    <p className={styles.text}>Twitter: <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></p>
                    <p className={styles.text}>Vk: <a href={profile.contacts.vk}>{profile.contacts.vk}</a></p>
                    <p className={styles.text}>{`Статус поиска работы: ${profile.lookingForAJob ? 'Ищу' : 'Нет'}`}</p>
                    <p className={styles.text}>{`Рабочий статус: ${profile.lookingForAJobDescription}`}</p>
                    {owner && <button onClick={() => setVisible(true)}>Сменить аватар</button>}
                    {visible && <input type='file' onChange={changeAvatarHandler}/>}
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile