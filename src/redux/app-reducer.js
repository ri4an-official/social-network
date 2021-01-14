import { authMe } from "./auth-reducer";

let initialState = {
    initialized: false,
};

export const initializedSuccess = () => ({
    type: "INITIALIZED_SUCCESS",
});

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(authMe())]).then(() =>
        dispatch(initializedSuccess())
    );
    // dispatch(something());
    // dispatch(something());
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
};
export default appReducer;
