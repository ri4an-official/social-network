import {
    default as profileReducer,
    deletePost,
} from "./profile-reducer";

test("delete post", () => {
    //1. test data
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
    //2. action
    let newState = profileReducer(initialState, deletePost(1));
    //3. expectation
    expect(newState.posts.length).toBe(3);
});
