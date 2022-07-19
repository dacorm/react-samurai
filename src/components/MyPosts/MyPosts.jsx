import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/state";



const MyPosts = ({ posts, dispatch }) => {
    const postElements = posts.profilePage.posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)
    const postsRef = React.createRef();

    const handlePostSubmit = () => {
        dispatch(addPostActionCreator());
        dispatch(updatePostTextActionCreator(''))
    }

    const onPostChange = () => {
        const text = postsRef.current.value;
        dispatch(updatePostTextActionCreator(text))
    }

    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' onChange={onPostChange} ref={postsRef} className={styles.form}  value={posts.profilePage.newPostText} />
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
