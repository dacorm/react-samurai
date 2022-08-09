import React, {useEffect} from 'react';
import s from "../Users/Users.module.css";
import userIcon from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paggination from "../Paggination/Paggination";


const Users = (props) => {

    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsersThunk(props.currentPage, props.pageSize)
        }
    }, [])

    const setPage = (pageNumber) => {
        props.getUsersThunk(pageNumber, props.pageSize)
        props.setCurrentPage(pageNumber);
    }

    return (
        <div>

            <h1>Users</h1>
            {props.isFetching && <Preloader/>}
                <Paggination currentPage={props.currentPage} onPageChanged={setPage}
                             totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
            {
                props.users.map(u =>
                    (
                        <div className={s.wrapper}>
                            <div className={s.avContainer}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <div className={s.round}
                                         style={{backgroundImage: `url(${u.photos.small != null ? u.photos.small : userIcon})`}}/>
                                </NavLink>
                                {
                                    u.followed ? <button type='submit'
                                                         disabled={props.followingInProgress.some(id => id === u.id)}
                                                         onClick={() => {
                                                             props.unfollowThunk(u.id);
                                                         }}
                                                         className={s.button}>Unfollow</button>
                                        : <button type='submit'
                                                  disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.followThunk(u.id);
                                                  }}
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

export default Users

