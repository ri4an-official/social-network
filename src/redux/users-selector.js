import { createSelector } from "reselect";

export const getUsersSelector = (state) => state.usersPage.users;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalUsersCount = (state) => state.usersPage.totalCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
    state.usersPage.followingInProgress;

export const getUsers = createSelector(
    getUsersSelector,
    getIsFetching,
    (users, isFetching) => users.filter((u) => true)
);
