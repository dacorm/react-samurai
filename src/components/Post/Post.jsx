import styles from "./Post.module.css";
import React from "react";


const Post = () => {
    return (
        <>
        <div className={styles.post}>
            <div className={styles.round}/>
            <p className={styles.postText}>Hey why nobody loves me</p>
        </div>
        </>
    )
}

export default Post