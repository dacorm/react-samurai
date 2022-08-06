import React, {useEffect, useState} from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [id, setId] = useState(0);

    const fetchId = async () => {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        setId(res.data.data.id);
    }

    useEffect(() => {
        fetchId();
    }, [])

    console.log(id)
    return (
        <nav className={styles.nav}>
            <NavLink to={`/profile/${id ?? 2}`}
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