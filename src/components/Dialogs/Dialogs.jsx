import React from 'react';
import styles from './Dialogs.module.css';
import Message from "../Message/Message";
import Dialog from "../Dialog/Dialog";
import {Field, Form} from "react-final-form";

const Dialogs = (props) => {

    const state = props.dialogsPage
    const userElements = state.users.map(user => <Dialog name={user.name} id={`${user.id}`} key={user.id}/>);
    const messageElements = state.message.map(msg => <Message author={msg.author} text={msg.text} id={msg.id} key={msg.id} />)

    const DialogsForm = ({ handleMessageSubmit }) => {

        const onSubmit = (formData) => {
            handleMessageSubmit(formData)
        }

        return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name='message' placeholder='your news' className={styles.form} component='textarea' />
                        <button type='submit' className={styles.button}>Send</button>
                    </form>
                )}
            />
        );
    };


    const handleMessageSubmit = (values) => {
        props.updateMessage(values.message);
        props.sendMessage();
    }

    return (
        <div className={styles.dialogs}>
            <h2>Dialogs</h2>
        <div className={styles.wrapper}>
        <div className={styles.names}>
            {
                userElements
            }
        </div>
        <div className={styles.dialog}>
            {
                messageElements
            }
            <div className={styles.newpost}>
                <h3 className={styles.title}>New message</h3>
                <DialogsForm handleMessageSubmit={handleMessageSubmit}/>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Dialogs