const { default: axios } = require("axios");
const intance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8b6db175-dcb8-4dbb-9055-5aa4c87d64d3",
    },
});

export const users = {
    async get(pageSize = 5, page = 1) {
        const response = await intance.get(
            `users?count=${pageSize}&page=${page}`
        );
        return response.data;
    },

    async follow(id) {
        const response = await intance.post(`follow/${id}`);
        return response.data;
    },

    async unfollow(id) {
        const response = await intance.delete(`follow/${id}`);
        return response.data;
    },
};

export const profiles = {
    async get(id) {
        const response = await intance.get(`profile/${id}`);
        return response.data;
    },
    async getStatus(id) {
        return await intance.get(`profile/status/${id}`).then((r) => r.data);
    },
    async updateStatus(status) {
        let a = await intance.put(`profile/status`, { status });
        return a.config.data;
        // .toString()
        // .replace("/", "")
        // .replace(":", "")
        // .replace("{", "")
        // .replace("}", "")
        // .replace("\\", "")
        // .replace("}", "")
        // .replace("null", "")
        // .replace("undefined", "")
        // .replace("/status", "")
        // .replace("}", "");
    },
};

export const auth = {
    async get() {
        const r = await intance.get(`auth/me`);
        return r.data;
    },
    async login(email, password, rememberMe = false) {
        const r = await intance.post(`auth/login`, {
            email,
            password,
            rememberMe,
        });
        return r.data;
    },
    async logout() {
        const r = await intance.delete(`auth/login`);
        return r.data;
    },
};
