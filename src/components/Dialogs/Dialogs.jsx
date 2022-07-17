import React from 'react';
import styles from './Dialogs.module.css';
import Message from "../Message/Message";
import Dialog from "../Dialog/Dialog";

const Dialogs = ({props}) => {
    const userElements = props.users.map(user => <Dialog name={user.name} id={`${user.id}`} key={user.id}/>);
    const messageElements = props.message.map(msg => <Message author={msg.author} text={msg.text} id={msg.id} key={msg.id} />)

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
        </div>
        </div>
        </div>
    )
}

export default Dialogs