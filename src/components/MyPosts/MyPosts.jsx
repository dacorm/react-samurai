import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";



const MyPosts = ({ posts, addPost }) => {
    const postElements = posts.posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)
    const postsRef = React.createRef();

    const handlePostSubmit = () => {
        const text = postsRef.current.value;
        addPost(text);
        postsRef.current.value = '';
    }

    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' ref={postsRef} className={styles.form}/>
                <button type='submit' onClick={handlePostSubmit} className={styles.button}>Send</button>
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
