import React from 'react';
import styles from './Dialogs.module.css';
import Message from "../Message/Message";
import Dialog from "../Dialog/Dialog";

const Dialogs = (props) => {

    const state = props.dialogsPage
    console.log(props)
    const userElements = state.users.map(user => <Dialog name={user.name} id={`${user.id}`} key={user.id}/>);
    const messageElements = state.message.map(msg => <Message author={msg.author} text={msg.text} id={msg.id} key={msg.id} />)

    const messageRef = React.createRef()

    const handleMsgSubmit = () => {
        props.sendMessage()
        props.updateMessage('');
    }

    const onInputChange = () => {
        const text = messageRef.current.value;
        props.updateMessage(text);
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
                <textarea placeholder='your news' ref={messageRef} className={styles.form}  onChange={onInputChange}  value={state.newMessageText} />
                <button type='submit' onClick={handleMsgSubmit}  className={styles.button}>Send</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Dialogs