import React, {useEffect} from 'react';
import styles from './Header.module.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

type HeaderProps = {
    isAuth: boolean
    login: string
    setUserThunk: (userId: number | null) => void
    id: number | null
    logoutThunk: () => void
}

const Header: React.FC<HeaderProps> = ({ isAuth, login, setUserThunk, id, logoutThunk }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth && id) {
            setUserThunk(id);
        }
    }, [isAuth, id])

    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src="https://i.pinimg.com/originals/93/81/07/93810770007bcf20b3800e07f0a059ef.png" alt="Логотип" className={styles.image} />
            </Link>
            {
                isAuth ?
                    (
                        <div className={styles.container}>
                            <p className={styles.username}>{login}</p>
                            <button onClick={() => {
                                logoutThunk()
                                navigate('/login')
                            }}>Logout</button>
                        </div>
                    )
                    : (<NavLink to={'/login'}>
                    <p className={styles.login}>Login</p>
                </NavLink>)
            }
        </header>
    )
}

export default Header