import styles from "./MyPosts.module.css";
import React from "react";



const MyPosts = () => {
    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' className={styles.form}/>
                <button type='submit' className={styles.button}>Send</button>
            </div>
            <div className={styles.posts}>
                <div className={styles.post}>
                    <div className={styles.round}/>
                    <p className={styles.postText}>Hey why nobody loves me</p>
                </div>
                <div className={styles.post}>
                    <div className={styles.round}/>
                    <p className={styles.postText}>Its my new app hey</p>
                </div>
            </div>
        </>
    )
}

export default MyPosts
