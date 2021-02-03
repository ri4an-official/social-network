import { profiles } from "../api/api";

export const addPost = (post) => ({
    type: "profile/ADD_POST",
    post,
});
export const deletePost = (id) => ({
    type: "profile/DELETE_POST",
    id,
});

export const savePhotoSuccess = (photo) => ({
    type: "SAVE_PHOTO_SUCCESS",
    photo,
});

let initialState = {
    posts: [
        {
            id: 1,
            post: "It's my first post!",
            img:
                "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
        },
        {
            id: 2,
            post: "How are you?",
            img:
                "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
        },
        {
            id: 3,
            post: "...",
            img:
                "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
        },
        {
            id: 4,
            post: "...",
            img:
                "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
        },
    ],
    profile: null,
    status: "",
};

export const setProfile = (profile) => ({
    type: "profile/SET_PROFILE",
    profile,
});

export const setStatus = (status) => ({
    type: "profile/SET_STATUS",
    status,
});

export const getProfile = (id) => async (dispatch) => {
    let data = await profiles.get(id);
    dispatch(setProfile(data));
};

export const getStatus = (id) => async (dispatch) => {
    let data = await profiles.getStatus(id);
    dispatch(setStatus(data));
    return data;
};

export const savePhoto = (fileName) => async (dispatch) => {
    let data = await profiles.savePhoto(fileName);
    dispatch(savePhotoSuccess(data.large));
};
export const updateStatus = (status) => async (dispatch) => {
    let data = await profiles.updateStatus(status);
    dispatch(setStatus(data));
    return data;
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "profile/ADD_POST":
            return {
                ...state,
                posts: [
                    {
                        post: action.post,
                        img:
                            "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
                    },
                    ...state.posts,
                ],
            };
        case "profile/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.id),
            };

        case "profile/SET_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        case "profile/SET_STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: { ...state.profile, photo: action.photo },
            };

        default:
            return { ...state };
    }
};
export default profileReducer;
