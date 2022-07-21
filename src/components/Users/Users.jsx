import React from 'react';
import s from "../Users/Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.istmira.com/uploads/posts/2019-01/1548098997_412d4c832349439.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://sun9-33.userapi.com/impf/c831408/v831408538/54d28/dfYOnVk2veA.jpg?size=439x600&quality=96&sign=ba495e5220158f93e1701d4c8ebd2a51&type=album',
                    followed: true,
                    fullName: 'Denis',
                    status: 'I am a boss too',
                    location: {city: 'Novosibirsk', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'http://almode.ru/uploads/posts/2020-07/1596170378_5-p-endryu-garfild-instagramm-10.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    const users = props.users.map(u =>
        (
        <div className={s.wrapper}>
            <div className={s.avContainer}>
                <div className={s.round} style={{ backgroundImage:`url(${u.photoUrl})` }} />
                {
                    u.followed ? <button type='submit' onClick={() => props.unfollow(u.id)} className={s.button}>Unfollow</button>
                        : <button type='submit' onClick={() => props.follow(u.id)} className={s.button}>Follow</button>
                }
            </div>
            <div className={s.userInfo}>
                <div className={s.textWrapper}>
                    <p className={s.name}>{u.fullName}</p>
                    <p className={s.desc}>{u.status}</p>
                </div>
                <p className={s.city}>{u.location.city}</p>
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