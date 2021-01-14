import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
} from "../../../redux/users-reducer";
import React, { useEffect } from "react";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../../redux/users-selector";

export default compose(
    connect(
        (state) => ({
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
        }),
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            requestUsers,
        }
    )
)((props) => {
    useEffect(() => props.requestUsers(props.currentPage, props.pageSize), []);
    return (
        <>
            {props.isFetching && <Preloader />}
            <Users
                {...props}
                onPageChange={(currentPage) =>
                    props.requestUsers(currentPage, props.pageSize)
                }
            />
        </>
    );
});
