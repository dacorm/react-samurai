import React from 'react';
import s from "../Users/Users.module.css";
import axios from 'axios';
import userIcon from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items)
        })
    }
    const users = props.users.map(u =>
        (
        <div className={s.wrapper}>
            <div className={s.avContainer}>
                <div className={s.round} style={{ backgroundImage:`url(${u.photos.small != null ? u.photos.small : userIcon})` }} />
                {
                    u.followed ? <button type='submit' onClick={() => props.unfollow(u.id)} className={s.button}>Unfollow</button>
                        : <button type='submit' onClick={() => props.follow(u.id)} className={s.button}>Follow</button>
                }
            </div>
            <div className={s.userInfo}>
                <div className={s.textWrapper}>
                    <p className={s.name}>{u.name}</p>
                    <p className={s.desc}>{u.status}</p>
                </div>
                <p className={s.city}>{u?.location?.city != null ? u.location.city : 'Russia'}</p>
            </div>
        </div>
    ))

    return (
        <div>
            <h1>Users</h1>
            {
                users
            }
            <button type='submit' className={s.buttonShow}>Show More</button>
        </div>
    )
}

export default Users