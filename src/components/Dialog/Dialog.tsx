import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

type DialogProps = {
    name: string
    id: string
}

const Dialog: React.FC<DialogProps> = ({ name, id }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.dot} />
            <NavLink to={id} className={styles.name}>{name}</NavLink>
        </div>
    )
}

export default Dialog