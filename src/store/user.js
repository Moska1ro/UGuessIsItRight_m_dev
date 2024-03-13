import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        ID: 1,
        name: '教师',
        isLoggedin: false
    }),
    getters: {
        getID: (state) => {
            return state.ID;
        }
    },
    actions: {
        changeName(name) {
            this.name = name;
        },
        changeIsLoggedin() {
            this.isLoggedin = !this.isLoggedin;
            sessionStorage.isLoggedin = this.isLoggedin;
        }
    },
})