import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/93/81/07/93810770007bcf20b3800e07f0a059ef.png" alt="Логотип" className={styles.image} />
        </header>
    )
}

export default Header