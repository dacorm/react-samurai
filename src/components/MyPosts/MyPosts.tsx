import styles from "./MyPosts.module.css";
import React from "react";
import Post from "../Post/Post";
import {Field, Form} from "react-final-form";
import {myPostsValidator} from "../../utils/validator";
import Element from "../../hoc/formValidation";
import {InitialStateType, messages} from "../../redux/profile-reducer";

const TextArea = Element('textarea')

type MyPostsFormProps = {
    handlePostSubmit: (values: formValue) => void
}

type MyPostFormData = {
    post: string
}

const MyPostsForm: React.FC<MyPostsFormProps> = ({ handlePostSubmit }) => {

    const onSubmit = (formData: MyPostFormData) => {
        handlePostSubmit(formData)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='post' placeholder='your news' className={styles.form} component={TextArea} validate={myPostsValidator}
                    />
                    <button type='submit' className={styles.button}>Send</button>
                </form>
            )}
        />
    );
};

type MyPostsProps = {
    profilePage: InitialStateType
    posts: messages[]
    sendPost: (newPostText: string) => void
}

type formValue = {
    post: string
}

const MyPosts: React.FC<MyPostsProps> = (props) => {
    const state = props.profilePage

    const postElements = state.posts.map(el => <Post message={el.message} id={el.id} key={el.id} />)


    const handlePostSubmit = (values: formValue) => {
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
