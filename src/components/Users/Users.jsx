import s from "./Users.module.css";
import userIcon from "./png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png";
import React from "react";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 8; i++) {
        pages.push(i)
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
                {
                    pages.map(p => <button onClick={(e) => { props.setPage(p) }} className={props.currentPage === p ? `${s.pagBtn} + ${s.pagBtnActive}` : s.pagBtn} key={p}>{p}</button>)
                }
            </div>
            {
                props.users.map(u =>
                    (
                        <div className={s.wrapper} key={u.id}>
                            <div className={s.avContainer}>
                                <div className={s.round}
                                     style={{backgroundImage: `url(${u.photos.small != null ? u.photos.small : userIcon})`}}/>
                                {
                                    u.followed ? <button type='submit' onClick={() => props.unfollow(u.id)}
                                                         className={s.button}>Unfollow</button>
                                        : <button type='submit' onClick={() => props.follow(u.id)}
                                                  className={s.button}>Follow</button>
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
            }
            <button type='submit' className={s.buttonShow}>Show More</button>
        </div>
    )
}

export default Users;