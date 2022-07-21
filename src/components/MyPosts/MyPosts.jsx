import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";



const MyPosts = (props) => {
    const state = props.profilePage

    console.log(props)
    const postElements = state.posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)
    const postsRef = React.createRef();


    const handlePostSubmit = () => {
        props.sendPost();
        props.updatePost('');
    }

    const onPostChange = () => {
        const text = postsRef.current.value;
        props.updatePost(text);
    }

    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <textarea placeholder='your news' onChange={onPostChange} ref={postsRef} className={styles.form}  value={state.newPostText} />
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
