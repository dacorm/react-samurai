import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

const Header = ({ isAuth, login, setUserProfile, id }) => {

    useEffect(() => {
        if (isAuth && id) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => setUserProfile(response.data))
        }
    }, [isAuth, id])


    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src="https://i.pinimg.com/originals/93/81/07/93810770007bcf20b3800e07f0a059ef.png" alt="Логотип" className={styles.image} />
            </Link>
            {
                isAuth ? (<p className={styles.username}>{login}</p>) : (<NavLink to={'/login'}>
                    <p className={styles.login}>Login</p>
                </NavLink>)
            }
        </header>
    )
}

export default Header