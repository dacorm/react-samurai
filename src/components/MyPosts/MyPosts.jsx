import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";



const MyPosts = ({ posts }) => {
    const postElements = posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)


    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' className={styles.form}/>
                <button type='submit' className={styles.button}>Send</button>
            </div>
            <div className={styles.posts}>
                {
                    postElements
                }
            </div>
        </>
    )
}

export default MyPosts
