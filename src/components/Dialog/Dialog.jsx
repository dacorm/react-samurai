import React from 'react';
import styles from './Dialog.module.css';

const Dialog = ({ name }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dot} />
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Dialog