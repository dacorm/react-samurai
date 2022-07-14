import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";



const MyPosts = () => {
    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' className={styles.form}/>
                <button type='submit' className={styles.button}>Send</button>
            </div>
            <div className={styles.posts}>
                <Post message='Hey its my first post'/>
                <Post message='Im writing social network'/>
            </div>
        </>
    )
}

export default MyPosts
