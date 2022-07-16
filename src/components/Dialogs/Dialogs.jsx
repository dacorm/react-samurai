import React from 'react';
import styles from './Dialogs.module.css';
import Message from "../Message/Message";
import Dialog from "../Dialog/Dialog";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <h2>Dialogs</h2>
        <div className={styles.wrapper}>
        <div className={styles.names}>
            <Dialog name='Andrew'/>
            <Dialog name='Petr'/>
            <Dialog name='Demetro'/>
            <Dialog name='Max'/>
        </div>
        <div className={styles.dialog}>
            <Message author='Dmitry' text='I can have text inside'/>
            <Message author='Dmitry' text='I can have text inside'/>
            <Message author='Dmitry' text='I can have text inside'/>
            <Message author='Dmitry' text='I can have text inside'/>
        </div>
        </div>
        </div>
    )
}

export default Dialogs