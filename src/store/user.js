import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        ID: 'student',
        name: '',
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
        }
    },
})