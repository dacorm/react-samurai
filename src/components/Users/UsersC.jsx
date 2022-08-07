import React from 'react';
import s from "../Users/Users.module.css";
import axios from 'axios';
import userIcon from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png'
import preloader from '../../assets/images/preloader.svg'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {toggleFollowingProgress} from "../../redux/users-reducer";


class Users extends React.Component {


    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        }
    }

    setPage = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= 8; i++) {
            pages.push(i)
        }

        return (
            <div>

                <h1>Users</h1>
                {this.props.isFetching && <Preloader />}
                <div>
                    {
                        pages.map(p => <button onClick={(e) => { this.setPage(p) }} className={this.props.currentPage === p ? `${s.pagBtn} + ${s.pagBtnActive}` : s.pagBtn} key={p}>{p}</button>)
                    }
                </div>
                {
                    this.props.users.map(u =>
                        (
                            <div className={s.wrapper}>
                                <div className={s.avContainer}>
                                    <NavLink to={`/profile/${u.id}`}>
                                    <div className={s.round}
                                         style={{backgroundImage: `url(${u.photos.small != null ? u.photos.small : userIcon})`}}/>
                                    </NavLink>
                                    {
                                        u.followed ? <button type='submit' disabled={this.props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                this.props.unfollowThunk(u.id);
                                        }}
                                                             className={s.button}>Unfollow</button>
                                            : <button type='submit' disabled={this.props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                this.props.followThunk(u.id);
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
}

export default Users

