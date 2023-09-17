import { defineStore } from 'pinia'
import getUser from "../services/getUser.js";
import logoutUser from "../services/logoutUser.js";
import registerUser from "../services/registerUser.js";
export const useUserStore = defineStore('userStore', {
    state: () => ({ user: null}),
    getters: {

    },
    actions: {
        async fetchUser() {
            const user = await getUser()
            this.setUser(user)
            return  user
        },

        setUser(data) {
            this.user = data
        },

        async registerUser(data) {
            await registerUser(data)
        },

        async logoutUser() {
            await logoutUser()
            this.setUser({})
        }
    },
})