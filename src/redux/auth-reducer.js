import { isAsyncValidating, stopSubmit } from "redux-form";
import { auth } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: "SET_USER_DATA",
    payload: { userId, email, login, isAuth },
});

export const authMe = () => async (dispatch) => {
    let result = await auth.get();
    if (result.resultCode === 0) {
        let { id, email, login } = result.data;
        dispatch(setUserData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let result = await auth.login(email, password, rememberMe);
    if (result.resultCode === 0) dispatch(authMe());
    else
        dispatch(
            stopSubmit("login", {
                _error:
                    result.messages.length > 0
                        ? result.messages[0]
                        : "Some error",
            })
        );
};

export const logout = () => async (dispatch) => {
    let result = await auth.logout();
    if (result.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return { ...state };
    }
};
export default authReducer;
