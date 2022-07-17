import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";

const Profile = ({props}) => {


    console.log(props)
    return (
        <div className={styles.content}>
            <div className={styles.cover}>
                <img src='https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg' className='contentImage'/>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.avatar}/>
                <div className={styles.description}>
                    <p className={styles.text}>Denis Utkin</p>
                    <p className={styles.text}>Date of Birth: 26 February</p>
                    <p className={styles.text}>City: Novosibirsk</p>
                    <p className={styles.text}>Education: Sibsutis</p>
                    <p className={styles.text}>Website: none</p>
                </div>
            </div>
            <MyPosts posts={props}/>
        </div>
    )
}

export default Profile