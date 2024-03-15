import { defineStore } from "pinia"
import { ref, computed } from 'vue'

export const useUserStore = defineStore("user", () => {
    const ID = ref(1);
    const role = ref(0);// 0教师1学生2管理
    const name = ref('教师');
    const isLoggedin = ref(false);

    const getID = computed(() => {
        return ID.value;
    })
    const getSessionRole = computed(() => {
        switch (sessionStorage.role) {
            case '0':
                return 'teacher';
            case '1':
                return 'student';
            case '2':
                return 'admin';
        }
        return -1;
    });


    let changeName = (name) => {
        name.value = name;
    }
    let login = (loginRole) => {
        isLoggedin.value = true;
        role.value = loginRole;
        sessionStorage.isLoggedin = isLoggedin.value;
        sessionStorage.role = role.value;
    }
    let logout = () => {
        isLoggedin.value = false;
        sessionStorage.isLoggedin = isLoggedin.value;
    }

    return {
        ID,
        role,
        name,
        isLoggedin,
        getID,
        getSessionRole,
        changeName,
        login,
        logout
    };
})