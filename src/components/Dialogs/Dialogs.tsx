import React from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageProps} from "../Message/Message";
import Dialog from "../Dialog/Dialog";
import {Field, Form} from "react-final-form";
import {InitialStateType, UsersType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: () => void
    updateMessage: (text: string) => void
    users: UsersType[]
}

type dialogsFormProp = {
    handleMessageSubmit: (values: NewMessageFormValuesType) => void
}

export type NewMessageFormValuesType = {
    message: string
}

type messageFormData = {
    message: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    const state = props.dialogsPage
    // @ts-ignore
    const messageElements = state.message.map(msg => <Message author={msg.author} text={msg.text} id={msg.id} key={msg.id} />)

    const DialogsForm: React.FC<dialogsFormProp> = ({ handleMessageSubmit }) => {

        const onSubmit = (formData: messageFormData) => {
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


    const handleMessageSubmit = (values: NewMessageFormValuesType) => {
        props.updateMessage(values.message);
        props.sendMessage();
    }

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.dialogsTitle}>Dialogs</h2>
        <div className={styles.wrapper}>
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