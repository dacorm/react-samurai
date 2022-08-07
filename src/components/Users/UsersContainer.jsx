import React from 'react';
import UsersC from "./UsersC";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setUsers,
    setTotalUsersCount,
    unfollow,
    toggleFollowingProgress,
    getUsersThunk, unfollowThunk, followThunk
} from "../../redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching, toggleFollowingProgress,
    getUsersThunk,
    unfollowThunk, followThunk})(UsersC);