import React from 'react';
import styles from './Profile.module.css'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = ({ profile }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={styles.content}>
            <div className={styles.cover}>
                <img src='https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg' alt='Profile avatar' className='contentImage'/>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.avatar} style={{backgroundImage: `url(${profile.photos.small})`}}/>
                <div className={styles.description}>
                    <p className={styles.text}>{profile.fullName}</p>
                    <p className={styles.text}>{profile.aboutMe}</p>
                    <p className={styles.text}>Facebook: <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></p>
                    <p className={styles.text}>Github: <a href={profile.contacts.github}>{profile.contacts.github}</a></p>
                    <p className={styles.text}>Instagram: <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a></p>
                    <p className={styles.text}>Twitter: <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></p>
                    <p className={styles.text}>Vk: <a href={profile.contacts.vk}>{profile.contacts.vk}</a></p>
                    <p className={styles.text}>{profile.aboutMe}</p>
                    <p className={styles.text}>{`Статус поиска работы: ${profile.lookingForAJob ? 'Ищу' : 'Нет'}`}</p>
                    <p className={styles.text}>{`Рабочий статус: ${profile.lookingForAJobDescription}`}</p>
                    <p className={styles.text}>Website: none</p>
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile