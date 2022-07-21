import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to='/'
                     className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Profile</NavLink>
            <NavLink to='dialogs'
                     className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Messages</NavLink>
            <NavLink to='users'
                     className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Users</NavLink>
            <a href='' className={styles.item}>News</a>
            <a href='' className={styles.item}>Music</a>
            <a href='' className={styles.item}>Settings</a>
        </nav>
    )
}

export default Navbar