import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";
import {Field, Form} from "react-final-form";



const MyPostsForm = ({ onPostChange, handlePostSubmit }) => {

    const onSubmit = (formData) => {
        handlePostSubmit(formData)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='post' placeholder='your news' className={styles.form} component='textarea' />
                    <button type='submit' className={styles.button}>Send</button>
                </form>
            )}
        />
    );
};

const MyPosts = (props) => {
    const state = props.profilePage
    console.log(props.sendPost)
    const postElements = state.posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)


    const handlePostSubmit = (values) => {
        props.sendPost(values.post);
        values.post = '';
    }

    return (
        <>
            <div className={styles.newpost}>
                <h3 className={styles.title}>My post</h3>
                <MyPostsForm handlePostSubmit={handlePostSubmit} />
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
