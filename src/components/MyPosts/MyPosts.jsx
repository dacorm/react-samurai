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
                <Post />
                <Post />
            </div>
        </>
    )
}

export default MyPosts
