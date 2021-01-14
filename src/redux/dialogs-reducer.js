const SEND_MESSAGE = "SEND_MESSAGE";
export const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    message,
});
let initialState = {
    messages: ["Hi!", "How are you?", "Yo!", "...", "..."],
    dialogs: [
        {
            id: 1,
            user: {
                id: 0,
                name: "Vadim",
                ava:
                    "https://www.cossa.ru/upload/main/43d/9ca8909fe1a0b6307a0178d15ca7e298_ava2.png",
            },
        },
        {
            id: 2,
            user: {
                id: 1,
                name: "Alexey",
                ava:
                    "https://imageproxy.ifunny.co/noop/user_photos/378e4025de4c0354957634d4c90c560c45660845_0.jpg",
            },
        },
        {
            id: 3,
            user: {
                id: 2,
                name: "Katya",
                ava:
                    "https://w-dog.ru/wallpapers/3/9/444606473038196/sochi-olimpiada-2014-zima.jpg",
            },
        },
        {
            id: 4,
            user: {
                id: 3,
                name: "Anastasya",
                ava:
                    "https://i03.fotocdn.net/s117/7ebccba5f87465d9/user_l/2662262520.jpg",
            },
        },
        {
            id: 5,
            user: {
                id: 4,
                name: "Ivan",
                ava:
                    "https://im0-tub-kz.yandex.net/i?id=05bd6da93cee6b0d87a3d2c2a6902013&n=13&exp=1",
            },
        },
    ],
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
            };

        default:
            return { ...state };
    }
};
export default dialogsReducer;
