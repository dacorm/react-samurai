import styles from "./Post.module.css";
import React from "react";


const Post = ({ message, id }) => {
    return (
        <>
        <div className={styles.post}>
            <div className={styles.round}/>
            <p className={styles.postText}>{message}</p>
        </div>
        </>
    )
}

export default Post