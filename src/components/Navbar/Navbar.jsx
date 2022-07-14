import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
                <a href='' className={styles.item}>Profile</a>
                <a href='' className={styles.item}>Messages</a>
                <a href='' className={styles.item}>News</a>
                <a href='' className={styles.item}>Music</a>
                <a href='' className={styles.item}>Settings</a>
        </nav>
    )
}

export default Navbar