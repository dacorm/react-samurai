import React from 'react';
import styles from './Message.module.css';

const Message = ({ author, text, id }) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <div className={styles.round}/>
                <p className={styles.author}>{author}</p>
            </div>
            <div className={styles.messageItem}>{text}</div>
        </div>
    )
}

export default Message