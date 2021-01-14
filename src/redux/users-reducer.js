import { users } from "../api/api";

export const followSuccess = (userId) => ({
    type: "FOLLOW",
    userId,
});

export const unfollowSuccess = (userId) => ({
    type: "UNFOLLOW",
    userId,
});

export const setCurrentPage = (page) => ({
    type: "SET_CURRENT_PAGE",
    currentPage: page,
});

export const setTotalCount = (totalCount) => ({
    type: "SET_TOTAL_COUNT",
    totalCount,
});

export const toggleIsFetching = (isFetching) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching,
});

export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    followingInProgress,
    userId,
});

export const requestUsers = (page = 1, pageSize = 5) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await users.get(pageSize, page);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, success) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(success(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => (dispatch) =>
    followUnfollowFlow(dispatch, userId, follow, followSuccess);

export const unfollow = (userId) => (dispatch) =>
    followUnfollowFlow(dispatch, userId, unfollow, unfollowSuccess);

export const setUsers = (users) => ({ type: "SET_USERS", users: users });

let initialState = {
    users: [],
    pageSize: 15,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: true } : u
                ),
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: false } : u
                ),
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case "SET_USERS":
            return {
                ...state,
                users: action.users,
            };
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };
        default:
            return state;
    }
};
export default usersReducer;
